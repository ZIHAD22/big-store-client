import React from "react";
import { UserIcon } from "@heroicons/react/solid";

const BlogItem = (props) => {
  const { blog } = props;
  return (
    <div className="">
      <div className="grid grid-cols-3 shadow-lg p-2 rounded-lg">
        <div className="my-auto">
          <img className="w-[200px] h-[300px]" src={blog.img} alt="" />
        </div>
        <div className="col-span-2">
          <h1 className="text-3xl text-center font-sans">{blog.title}</h1>
          <p className="text-base p-3 text-gray-600 font-medium">{blog.desc}</p>
          <span className="flex items-center my-2">
            <UserIcon className="w-6 h-6 text-orange-400" />
            <span className="text-gray-800 text-center font-sans font-bold">
              MD. ZIAHD
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
