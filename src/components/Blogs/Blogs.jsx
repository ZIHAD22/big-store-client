import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogItem from "../BlogItem/BlogItem";
import Loading from "../Loading/Loading";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://tranquil-anchorage-25651.herokuapp.com/blogs")
      .then((res) => {
        setBlogs(res.data);
        if (res.status) {
          setLoading(false);
        }
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen mb-20">
      <h1 className="text-center text-4xl font-serif font-bold my-4">
        WelCome To Our Blogs
      </h1>
      <div className="blogs grid xs:grid-cols-1 md:grid-cols-2 xs:mx-5 md:mx-20 gap-8 text-center mx-auto justify-self-center">
        {blogs.map((blog) => (
          <BlogItem blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
