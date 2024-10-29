// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Mock list of blog posts with unique IDs
  const posts = [
    { id: 1, title: 'Exploring the Future of AI' },
    { id: 2, title: 'Understanding Quantum Computing' },
    { id: 3, title: 'The Rise of Renewable Energy' },
    { id: 4, title: 'A Guide to Web 3.0' },
    { id: 5, title: 'Introduction to Cryptocurrency' }
  ];

  return (
    <div>
      <h1>Blog Home</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
