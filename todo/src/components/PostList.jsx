// src/components/PostList.js
import React from 'react';
import { useGetPostsQuery, useDeletePostMutation } from '../services/postsApi';

const PostList = () => {
  // Fetch posts from the API using RTK Query hook
  const { data: posts, error, isLoading } = useGetPostsQuery();

  // Delete post mutation hook
  const [deletePost] = useDeletePostMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleDelete = (id) => {
    deletePost(id);
  };

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
