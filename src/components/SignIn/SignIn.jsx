import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignIn = () => {
  return (
    <div className="bg-registration-img h-screen bg-center bg-cover">
      <div className="opacity-90 bg-white h-full">
        <form action="">
          <h1 className="text-4xl pt-1 font-serif font-sans text-center">
            Welcome To Here
          </h1>
          <div className="w-1/3 mx-auto mt-10">
            <h4 className="text-xl text-orange-400 font-serif font-sans text-center">
              Sign In
            </h4>
            <div className="grid grid-cols-1 gap-x-2">
              <input
                type="email"
                className="form-control mt-4 block px-3 py-1.5 text-font-normal text-gray-800 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="grid grid-cols-1 gap-x-2">
              <input
                type="password"
                className="form-control mt-4 block px-3 py-1.5 text-font-normal text-gray-800 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                id="name"
                placeholder="Password"
              />
            </div>
            <div className="grid grid-cols-2 mt-4 items-center">
              <div className="text-blue-900 hover:underline">
                <Link to="/signUp">Not Registered ?</Link>
              </div>
              <div className="text-blue-900 hover:underline text-right">
                <Link to="pass-reset">Forget Password ?</Link>
              </div>
            </div>
            <div className="text-center mt-5">
              <button
                type="submit"
                className="bg-orange-400 nav-btn font-semibold px-5 py-2 rounded-lg inline-block w-1/2 my-2 hover:bg-orange-500"
              >
                Sign In
              </button>
            </div>

            {/* social Login */}
            <SocialLogin />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
