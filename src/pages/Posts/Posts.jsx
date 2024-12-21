import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import PostCard from '../../components/PostCard/PostCard';
import Loading from '../../components/Loading/Loading';

const Posts = () => {
  const [posts, setPosts] = useState([]);  // State to store fetched posts
  const [loading, setLoading] = useState(true);  // State to handle loading state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');  // Fetching posts data
        setPosts(res.data);  // Storing posts data in state
        setLoading(false);  // Updating loading state
      } catch (error) {
        console.error('Error fetching posts:', error);  // Handle errors
        setLoading(false);  // Stop loading on error
      }
    };

    fetchPosts();  // Calling the fetch function when the component mounts
  }, []);

  return (
    <div className="posts-container max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Posts</h2>
      {loading && (
        <div className="flex justify-center items-center mb-6">
          <Loading />  
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />  // Render each post in a card
        ))}
      </div>
    </div>
  );
};

export default Posts;
