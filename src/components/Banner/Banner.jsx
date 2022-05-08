import React from "react";

const Banner = () => {
  return (
    <div className="bg-banner-img  h-[450px] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col items-center pt-32">
        <h1 className="text-4xl font-serif font-bold">
          Best Food Groceries Management Site
        </h1>
        <input
          type="text"
          className="
        form-control
        mt-4
        block
        w-full
        md:w-1/3
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        border-orange-300
        outline-hidden
        m-0
        focus:text-gray-700 focus:bg-white focus:outline-orange-400
      "
          id="exampleFormControlInput1"
          placeholder="Search Groceries and hit Enter"
        />
      </div>
    </div>
  );
};

export default Banner;
