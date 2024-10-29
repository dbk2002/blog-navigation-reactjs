// src/Post.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  // Mock blog post data
  const posts = {
    1: { 
      title: 'Exploring the Future of AI', 
      content: 'Artificial Intelligence is evolving rapidly, with new breakthroughs in machine learning and neural networks paving the way for smarter technologies.'
    },
    2: { 
      title: 'Understanding Quantum Computing', 
      content: 'Quantum computing is set to revolutionize technology, utilizing quantum bits or qubits that can exist in multiple states simultaneously, leading to faster processing speeds.'
    },
    3: { 
      title: 'The Rise of Renewable Energy', 
      content: 'With climate change concerns rising, renewable energy sources like solar, wind, and hydro are becoming essential for a sustainable future.'
    },
    4: { 
      title: 'A Guide to Web 3.0', 
      content: 'Web 3.0 represents the next phase of the internet, integrating decentralization, blockchain, and increased user control over data.'
    },
    5: { 
      title: 'Introduction to Cryptocurrency', 
      content: 'Cryptocurrencies like Bitcoin and Ethereum have become major financial assets, utilizing blockchain technology to offer decentralized and secure transactions.'
    }
  };

  const post = posts[postId];

  if (!post) {
    // Redirect to NotFound if the post is not found
    navigate('/404');
    return null;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
