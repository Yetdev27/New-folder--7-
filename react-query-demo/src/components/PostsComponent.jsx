import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

const PostsComponent = () => {
    const { isLoading, isError, data, error, refetch } = useQuery('posts', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return response.json();
    }, {
        cacheTime: 30000, // Set cache time to 30 seconds
        staleTime: 60000, // Set stale time to 1 minute
        refetchOnWindowFocus: false, // Disable refetching on window focus
        keepPreviousData: true, // Keep previous data while fetching new data
    });

    useEffect(() => {
        // Fetch posts on component mount
        fetchPosts();
    }, []);

    const handleRefetch = () => {
        refetch();
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={handleRefetch}>Refetch Posts</button>
            {data.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostsComponent;

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
};
