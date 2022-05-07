import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Registration = () => {
  return (
    <div className="bg-registration-img h-screen bg-center bg-cover">
      <div className="opacity-90 bg-white h-full">
        <form action="">
          <h1 className="text-4xl font-serif font-sans text-center">
            Great to see you here!
          </h1>
          <div className="w-1/2 mx-auto mt-10">
            <h4 className="text-xl text-orange-400 font-serif font-sans text-center">
              Registration
            </h4>
            <div className="grid grid-cols-2 gap-x-2">
              <input
                type="text"
                className="form-control mt-4 block px-3 py-1.5 text-font-normal text-gray-800 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                id="name"
                placeholder="First Name"
              />
              <input
                type="text"
                className="form-control mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                id=""
                placeholder="Last Name"
              />
            </div>
            {/* part 2 */}
            <div className="grid grid-cols-2 gap-x-2">
              <input
                type="text"
                className="form-control mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                id="name"
                placeholder="User Name"
              />
              <input
                type="text"
                className="form-control mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                id=""
                placeholder="Email"
              />
            </div>
            {/* part 3 */}
            <div className="grid grid-cols-2 gap-x-2">
              <input
                type="password"
                className="form-control mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                id="name"
                placeholder="Password"
              />
              <input
                type="password"
                className="form-control mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                id=""
                placeholder="Confirm Password"
              />
            </div>
            <div className="grid grid-cols-2 mt-4 items-center">
              <div>
                <input className="" type="checkbox" name="" id="" />{" "}
                <span className="font-serif">
                  Accept All Trams and Condition ?
                </span>
              </div>
              <div className="text-blue-900 hover:underline">
                <Link to="/signUp">Already Registered ?</Link>
              </div>
            </div>

            <div className="text-center mt-5">
              <button
                type="submit"
                className="bg-orange-400 nav-btn font-semibold px-5 py-2 rounded-lg inline-block w-1/2 my-2 hover:bg-orange-500"
              >
                Registration
              </button>
            </div>
            {/* social login */}
            <SocialLogin />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
<h1>this is registration page</h1>;
