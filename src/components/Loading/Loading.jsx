import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-12 h-12">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-primary rounded-full animate-bounce"
            style={{
              animationDelay: `${i * 0.15}s`,
              transform: `rotate(${i * 45}deg) translate(1.5rem)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
