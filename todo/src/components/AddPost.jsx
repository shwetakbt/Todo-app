// src/components/AddPost.js
import React, { useState } from 'react';
import { useAddPostMutation } from '../services/postsApi';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [addPost] = useAddPostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && body) {
      await addPost({ title, body });
      setTitle('');
      setBody('');
    }
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
    