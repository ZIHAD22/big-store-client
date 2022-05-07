import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <div>
        <div className="flex items-center">
          <div style={{ height: "1px" }} className="bg-orange-500 w-1/2"></div>
          <p className="mt-2 px-2">or</p>
          <div style={{ height: "1px" }} className="bg-orange-500 w-1/2"></div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="bg-[#4B7FE0] nav-btn font-semibold px-5 py-2 rounded-lg inline-block w-1/2 my-2 hover:bg-[#4B7FE0]">
          {" "}
          Login With Google{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
