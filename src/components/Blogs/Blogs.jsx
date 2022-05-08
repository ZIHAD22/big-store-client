import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogItem from "../BlogItem/BlogItem";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);
  return (
    <div className="min-h-screen mb-20">
      <h1 className="text-center text-4xl font-serif font-bold my-4">
        WelCome To Our Blogs
      </h1>
      <div className="blogs grid grid-cols-2 mx-20 gap-8 text-center mx-auto justify-self-center">
        {blogs.map((blog) => (
          <BlogItem blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
