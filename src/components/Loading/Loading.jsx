import React from "react";

const Loading = () => {
  return (
    <div className="">
      <div className="h-screen flex items-center justify-center space-x-2">
        <div
          className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full     text-yellow-500"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
