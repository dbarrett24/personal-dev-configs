#!/usr/bin/env tsx
/**
 * Security Validation Script for Cursor Rules
 * 
 * Scans .mdc files in .cursor/rules/ and cursor-rules/ directories for:
 * - Prompt injection patterns
 * - Data exfiltration attempts
 * - Credential leaks
 * - Malicious code patterns
 * - File integrity issues
 */

import fs from 'fs';
import path from 'path';

// ANSI color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
};

interface SecurityIssue {
    file: string;
    line: number;
    severity: 'critical' | 'high' | 'medium' | 'low';
    type: string;
    message: string;
    context?: string;
}

const issues: SecurityIssue[] = [];

// Prompt injection patterns
const promptInjectionPatterns = [
    { pattern: /<!--.*?(ignore|override|bypass|execute|run|eval).*?-->/gis, type: 'Hidden HTML instructions', severity: 'critical' as const },
    { pattern: /\u200B|\u200C|\u200D|\uFEFF/g, type: 'Zero-width characters', severity: 'high' as const },
    { pattern: /\u202E/g, type: 'Right-to-left override', severity: 'high' as const },
    { pattern: /data:text\/html|data:application\/javascript/gi, type: 'Data URI scheme', severity: 'high' as const },
    { pattern: /javascript:|vbscript:/gi, type: 'Script protocol', severity: 'critical' as const },
    { pattern: /<!--\s*SYSTEM\s*:/gi, type: 'System instruction injection', severity: 'critical' as const },
];

// Credential and secret patterns
const secretPatterns = [
    { pattern: /sk-[a-zA-Z0-9]{32,}/g, type: 'OpenAI API key', severity: 'critical' as const },
    { pattern: /ghp_[a-zA-Z0-9]{36,}/g, type: 'GitHub Personal Access Token', severity: 'critical' as const },
    { pattern: /AKIA[0-9A-Z]{16}/g, type: 'AWS Access Key ID', severity: 'critical' as const },
    { pattern: /-----BEGIN (RSA |DSA |EC )?PRIVATE KEY-----/g, type: 'Private Key', severity: 'critical' as const },
    { pattern: /eyJ[a-zA-Z0-9_-]{10,}\.[a-zA-Z0-9_-]{10,}/g, type: 'JWT Token', severity: 'high' as const },
    { pattern: /(password|passwd|pwd)\s*[:=]\s*["'][^"']{8,}["']/gi, type: 'Hardcoded password', severity: 'critical' as const },
    { pattern: /mongodb(\+srv)?:\/\/[^:]+:[^@]+@/gi, type: 'MongoDB connection string with credentials', severity: 'critical' as const },
    { pattern: /postgres(ql)?:\/\/[^:]+:[^@]+@/gi, type: 'PostgreSQL connection string with credentials', severity: 'critical' as const },
];

// Malicious code patterns
const maliciousPatterns = [
    { pattern: /eval\s*\(/g, type: 'eval() usage', severity: 'high' as const },
    { pattern: /Function\s*\(/g, type: 'Function() constructor', severity: 'high' as const },
    { pattern: /exec\s*\(/g, type: 'exec() usage', severity: 'medium' as const },
    { pattern: /<script[^>]*>.*?<\/script>/gis, type: 'Script tag', severity: 'high' as const },
];

// Suspicious URL patterns
const suspiciousUrlPatterns = [
    { pattern: /https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[01])\.)/gi, type: 'Local/private IP URL', severity: 'medium' as const },
    { pattern: /webhook|callback.*?(http|https)/gi, type: 'Webhook/callback URL', severity: 'medium' as const },
];

/**
 * Recursively find all .mdc files in a directory
 */
const findMdcFiles = (dir: string): string[] => {
    const files: string[] = [];
    
    if (!fs.existsSync(dir)) {
        return files;
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
            files.push(...findMdcFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.mdc')) {
            files.push(fullPath);
        }
    }
    
    return files;
};

/**
 * Validate frontmatter format
 */
const validateFrontmatter = (content: string, filePath: string): void => {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
        issues.push({
            file: filePath,
            line: 1,
            severity: 'low',
            type: 'Missing frontmatter',
            message: 'File should start with YAML frontmatter between --- delimiters',
        });
        return;
    }

    // Check for malformed YAML indicators
    const frontmatter = match[1];
    if (frontmatter.includes('\t')) {
        issues.push({
            file: filePath,
            line: 1,
            severity: 'medium',
            type: 'Malformed YAML',
            message: 'Frontmatter contains tabs (should use spaces)',
        });
    }
};

/**
 * Scan file content for security issues
 */
const scanFile = (filePath: string): void => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    // Validate frontmatter
    validateFrontmatter(content, filePath);

    // Check for non-UTF8 encoding or binary content
    try {
        const buffer = fs.readFileSync(filePath);
        const nonPrintable = buffer.filter(byte => byte < 32 && byte !== 9 && byte !== 10 && byte !== 13).length;
        if (nonPrintable > 10) {
            issues.push({
                file: filePath,
                line: 0,
                severity: 'high',
                type: 'Binary content detected',
                message: 'File may contain binary or non-text content',
            });
        }
    } catch (err) {
        // Ignore errors
    }

    // Scan each line for patterns
    lines.forEach((line, index) => {
        const lineNumber = index + 1;

        // Check prompt injection patterns
        promptInjectionPatterns.forEach(({ pattern, type, severity }) => {
            if (pattern.test(line)) {
                issues.push({
                    file: filePath,
                    line: lineNumber,
                    severity,
                    type,
                    message: `Potential prompt injection detected: ${type}`,
                    context: line.trim().substring(0, 100),
                });
            }
        });

        // Check secret patterns
        secretPatterns.forEach(({ pattern, type, severity }) => {
            if (pattern.test(line)) {
                issues.push({
                    file: filePath,
                    line: lineNumber,
                    severity,
                    type,
                    message: `Potential credential leak: ${type}`,
                    context: line.trim().substring(0, 50) + '...',
                });
            }
        });

        // Check malicious code patterns
        maliciousPatterns.forEach(({ pattern, type, severity }) => {
            if (pattern.test(line)) {
                issues.push({
                    file: filePath,
                    line: lineNumber,
                    severity,
                    type,
                    message: `Potentially dangerous code: ${type}`,
                    context: line.trim().substring(0, 100),
                });
            }
        });

        // Check suspicious URLs
        suspiciousUrlPatterns.forEach(({ pattern, type, severity }) => {
            if (pattern.test(line)) {
                issues.push({
                    file: filePath,
                    line: lineNumber,
                    severity,
                    type,
                    message: `Suspicious URL detected: ${type}`,
                    context: line.trim().substring(0, 100),
                });
            }
        });
    });
};

/**
 * Print results
 */
const printResults = (): void => {
    console.log(`\n${colors.cyan}=== Cursor Rules Security Validation ===${colors.reset}\n`);

    if (issues.length === 0) {
        console.log(`${colors.green}✓ No security issues found!${colors.reset}\n`);
        return;
    }

    const critical = issues.filter(i => i.severity === 'critical');
    const high = issues.filter(i => i.severity === 'high');
    const medium = issues.filter(i => i.severity === 'medium');
    const low = issues.filter(i => i.severity === 'low');

    console.log(`${colors.red}✗ Found ${issues.length} issue(s):${colors.reset}`);
    console.log(`  ${colors.red}Critical: ${critical.length}${colors.reset}`);
    console.log(`  ${colors.yellow}High: ${high.length}${colors.reset}`);
    console.log(`  ${colors.yellow}Medium: ${medium.length}${colors.reset}`);
    console.log(`  ${colors.blue}Low: ${low.length}${colors.reset}\n`);

    // Group by severity and print
    [critical, high, medium, low].forEach(group => {
        if (group.length === 0) return;

        group.forEach(issue => {
            const severityColor = issue.severity === 'critical' || issue.severity === 'high' 
                ? colors.red 
                : issue.severity === 'medium' 
                ? colors.yellow 
                : colors.blue;

            console.log(`${severityColor}[${issue.severity.toUpperCase()}]${colors.reset} ${issue.file}:${issue.line}`);
            console.log(`  Type: ${issue.type}`);
            console.log(`  ${issue.message}`);
            if (issue.context) {
                console.log(`  Context: ${colors.cyan}${issue.context}${colors.reset}`);
            }
            console.log('');
        });
    });

    if (critical.length > 0 || high.length > 0) {
        console.log(`${colors.red}⚠ CRITICAL OR HIGH SEVERITY ISSUES FOUND!${colors.reset}`);
        console.log(`${colors.red}Please review and fix these issues before proceeding.${colors.reset}\n`);
        process.exit(1);
    }
};

/**
 * Main execution
 */
const main = (): void => {
    const projectRoot = path.resolve(__dirname, '..');
    const directories = [
        path.join(projectRoot, '.cursor', 'rules'),
        path.join(projectRoot, 'cursor-rules'),
    ];

    console.log(`${colors.cyan}Scanning cursor rules for security issues...${colors.reset}\n`);

    let totalFiles = 0;
    directories.forEach(dir => {
        const files = findMdcFiles(dir);
        console.log(`${colors.blue}Scanning ${files.length} file(s) in ${path.relative(projectRoot, dir)}${colors.reset}`);
        files.forEach(scanFile);
        totalFiles += files.length;
    });

    console.log(`\n${colors.blue}Scanned ${totalFiles} total file(s)${colors.reset}`);
    printResults();
};

// Run the script
main();
