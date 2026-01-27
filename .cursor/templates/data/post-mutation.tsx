/**
 * POST Mutation Hook Template
 *
 * This template demonstrates React Query POST mutation patterns.
 * Adapt the API paths and types to your project.
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';

// ============================================
// Type Definitions
// ============================================

type CreateResourceRequest = {
    name: string;
    description?: string;
};

type CreateResourceResponse = {
    id: string;
    name: string;
    createdAt: string;
};

type ErrorResponse = {
    error: string;
    message?: string;
    validationErrors?: Array<{ field: string; message: string }>;
};

// ============================================
// Helper: Check if response is an error
// ============================================

const isErrorResponse = (response: unknown): response is ErrorResponse => {
    return (
        typeof response === 'object' &&
        response !== null &&
        'error' in response
    );
};

// ============================================
// Basic POST Mutation
// ============================================

const createResource = async (
    data: CreateResourceRequest
): Promise<CreateResourceResponse> => {
    const response = await fetch('/api/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok || isErrorResponse(result)) {
        throw new Error(result.message ?? result.error ?? 'Failed to create resource');
    }

    return result;
};

export const useCreateResource = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createResource,
        onSuccess: (newResource) => {
            // Invalidate and refetch resources list
            queryClient.invalidateQueries({ queryKey: ['resources'] });

            // Optionally set the individual resource data
            queryClient.setQueryData(['resources', newResource.id], newResource);
        },
    });
};

// ============================================
// POST Mutation with Callbacks
// ============================================

type UseCreateResourceOptions = {
    onSuccess?: (data: CreateResourceResponse) => void;
    onError?: (error: Error) => void;
};

export const useCreateResourceWithCallbacks = (options: UseCreateResourceOptions = {}) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createResource,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['resources'] });
            options.onSuccess?.(data);
        },
        onError: (error) => {
            options.onError?.(error);
        },
    });
};

// ============================================
// POST with FormData (File Upload)
// ============================================

type UploadFileRequest = {
    file: File;
    metadata?: Record<string, string>;
};

type UploadFileResponse = {
    id: string;
    url: string;
    size: number;
    mimeType: string;
};

const uploadFile = async ({
    file,
    metadata,
}: UploadFileRequest): Promise<UploadFileResponse> => {
    const formData = new FormData();
    formData.append('file', file);

    // Add metadata fields if provided
    if (metadata) {
        Object.entries(metadata).forEach(([key, value]) => {
            formData.append(key, value);
        });
    }

    const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData, // Let browser set Content-Type with boundary
    });

    const result = await response.json();

    if (!response.ok || isErrorResponse(result)) {
        throw new Error(result.message ?? result.error ?? 'Failed to upload file');
    }

    return result;
};

export const useUploadFile = () => {
    return useMutation({
        mutationFn: uploadFile,
        onSuccess: (data) => {
            console.log('File uploaded:', data.url);
        },
    });
};

// ============================================
// Usage Examples
// ============================================

/*
// Basic usage
const { mutate, isPending, isError, error } = useCreateResource();

const handleSubmit = (data: CreateResourceRequest) => {
    mutate(data, {
        onSuccess: () => {
            toast.success('Resource created!');
            router.push('/resources');
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};

// With loading state
<button
    onClick={() => mutate({ name: 'New Resource' })}
    disabled={isPending}
>
    {isPending ? 'Creating...' : 'Create Resource'}
</button>

// File upload
const { mutate: upload, isPending: isUploading } = useUploadFile();

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        upload({ file, metadata: { type: 'avatar' } });
    }
};
*/
