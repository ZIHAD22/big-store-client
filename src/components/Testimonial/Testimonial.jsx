import React, { useEffect, useState } from "react";
import useReview from "../../hooks/useReview";
import Loading from "../Loading/Loading";

const Testimonial = () => {
  const [reviews, setReviews, dataLoading] = useReview();

  if (dataLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-4xl text-gray-600 text-center font-sans">
        What our clients are saying
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 mb-20">
        <div className="">
          <img
            className="border-4 border-gray-600 rounded-full w-[300px] mx-auto"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1652023073~exp=1652023673~hmac=73c2cc60ff634eaf60d7fef02df3bce2185811f579979337813cf604a013a634&w=740"
            alt=""
          />
          <h1 className="text-xl text-gray-600 text-center my-4">
            {reviews.name}
          </h1>
        </div>
        <div className="md:my-auto text-center">
          <p className="w-1/2  text-gray-600 xs:mx-auto font-sans text-center">
            {reviews.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
