import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

export type Post = {
    id: string;
    title: string;
    body: string;
    userId: string;
};

export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
};

export const useGetPosts = (options?: UseQueryOptions<Post[]>) => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
        ...options,
    });
};

// For server-side prefetching
export const getPostsOptions = (): UseQueryOptions<Post[]> => ({
    queryKey: ['posts'],
    queryFn: getPosts,
});

