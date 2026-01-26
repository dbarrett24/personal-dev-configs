# Cursor AI Rules

> **⚠️ DEPRECATION NOTICE**  
> This directory is **deprecated** and maintained only for backward compatibility.  
> **New location:** `.cursor/rules/` (organized by category)  
> 
> **Migration completed:** All rules have been migrated with proper frontmatter.  
> This directory will be removed in a future version.

---

## 🔄 Migration Status

All cursor rules have been migrated to the modern `.cursor/rules/` structure:

### ✅ Migrated Files

#### Core Rules (`.cursor/rules/core/`)
- ✅ `typescript.mdc` - TypeScript patterns and best practices
- ✅ `react.mdc` - React component patterns  
- ✅ `naming.mdc` - Naming conventions

#### Architecture Rules (`.cursor/rules/architecture/`)
- ✅ `data-layer.mdc` - React Query patterns
- ✅ `state.mdc` - Jotai state management
- ✅ `forms.mdc` - React Hook Form + Zod

#### Quality Rules (`.cursor/rules/quality/`)
- ✅ `testing.mdc` - Testing patterns with RTL + Jest

#### Framework Rules (`.cursor/rules/framework/`)
- ✅ `nextjs.mdc` - Next.js App Router patterns

---

## 📁 New Structure

```
.cursor/rules/
├── core/
│   ├── typescript.mdc
│   ├── react.mdc
│   └── naming.mdc
├── architecture/
│   ├── data-layer.mdc
│   ├── state.mdc
│   └── forms.mdc
├── quality/
│   └── testing.mdc
├── framework/
│   └── nextjs.mdc
└── codacy.mdc
```

---

## 🎯 Why the Migration?

### Benefits of New Structure

1. **Modern Pattern** - Follows Cursor's recommended `.cursor/rules/` convention
2. **Better Organization** - Rules categorized by purpose (core, architecture, quality, framework)
3. **Proper Frontmatter** - All files have descriptive YAML frontmatter
4. **Glob Patterns** - Target specific file types with glob patterns
5. **Conditional Application** - Control when rules apply (`alwaysApply` flag)
6. **Security** - Integrated with security validation tools

### Frontmatter Example

```yaml
---
description: TypeScript patterns and best practices for strict type safety
globs:
  - "**/*.ts"
  - "**/*.tsx"
alwaysApply: true
---
```

---

## 🔒 Security

All cursor rules are now validated for security:

```bash
# Validate cursor rules for security issues
pnpm security:validate

# Checks for:
# - Prompt injection patterns
# - Hidden malicious instructions
# - Credential leaks
# - Suspicious code patterns
```

See [`SECURITY.md`](../SECURITY.md) for comprehensive security guidelines.

---

## 📚 Original Documentation

Production-ready Cursor rules extracted from professional development experience.

### Available Rules (Legacy Location)

1. **typescript.mdc** - TypeScript patterns and best practices
2. **react.mdc** - React component patterns and conventions
3. **testing.mdc** - Testing patterns with React Testing Library
4. **naming.mdc** - File, directory, and variable naming conventions
5. **forms.mdc** - Form patterns with React Hook Form + Zod
6. **state.mdc** - State management with Jotai
7. **nextjs.mdc** - Next.js App Router patterns
8. **data-layer.mdc** - Data fetching with React Query

### Key Principles

All rules follow these core principles:

- **Strict TypeScript** - No `any` types in production code
- **Functional React** - Only functional components, no classes
- **Named exports** - Except for Next.js pages
- **Arrow functions** - Consistent function syntax
- **High test coverage** - 90%+ for apps, 95%+ for libraries
- **Semantic naming** - Clear, descriptive names
- **Real behavior testing** - No component mocking

---

## 🚀 For New Projects

**Use the new location:** `.cursor/rules/`

The organized structure makes it easier to:
- Apply rules conditionally based on file type
- Understand rule categories at a glance
- Maintain and update rules systematically
- Validate security automatically

---

## 📝 Migration Timeline

- **2026-01-26** - Migration completed, new structure active
- **2026-02-26** - Deprecation warnings added (30 days)
- **2026-03-26** - Legacy files may be removed (60 days)

---

## License

MIT - Feel free to adapt and use in your projects
