import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 hover:rotate-1">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-indigo-600 transition-colors duration-200">{post.title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed mb-4">{post.body}</p>
      <div className="flex justify-end">
        <a
          href="#"
          className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-200"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default PostCard;
