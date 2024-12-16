// App.js

import React from 'react';
import { useGetPostsQuery } from './services/jsonPlaceholderApi'; // Correct path to API slice

function App() {
  const { data, error, isLoading } = useGetPostsQuery(); // Fetch data using the hook

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data?.map(post => (
          <li key={post.id}>{post.title}</li> // Render posts
        ))}
      </ul>
    </div>
  );
}

export default App;
