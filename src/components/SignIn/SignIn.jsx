import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../fireBase.init";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";
import { async } from "@firebase/util";
import { toast } from "react-toastify";

const SignIn = () => {
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = async (data) => {
    const { email, password } = data;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
    reset();
  };

  if (signInLoading) {
    return <Loading />;
  }

  if (signInUser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="bg-registration-img md:h-screen bg-center bg-cover">
      <div className="opacity-90 bg-white h-full">
        <form onSubmit={handleSubmit(handleSignIn)}>
          <h1 className="text-4xl pt-1 font-serif font-sans text-center">
            Welcome To Here
          </h1>
          <div className="md:w-1/3 xs:mx-4 mx-auto mt-10">
            <h4 className="text-xl text-orange-400 font-serif font-sans text-center">
              Sign In
            </h4>
            <div className="grid grid-cols-1 gap-x-2">
              <div>
                <input
                  type="email"
                  className="form-control w-full mt-4 block px-3 py-1.5 text-font-normal text-gray-800 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                  id="email"
                  {...register("email", { required: "Required" })}
                  placeholder="Email"
                />
                <div>
                  {errors && (
                    <p className="text-red-600">{errors.email?.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-2">
              <div>
                <input
                  type="password"
                  className="form-control mt-4 block px-3 py-1.5 text-font-normal text-gray-800 bg-white bg-clip-padding w-full border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                  id="password"
                  {...register("password", { required: "Required" })}
                  placeholder="Password"
                />
                <div>
                  {errors && (
                    <p className="text-red-600">{errors.password?.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-4 items-center">
              <div className="text-blue-900 hover:underline">
                <Link to="/signUp">Not Registered ?</Link>
              </div>
              <div className="text-blue-900 hover:underline text-right">
                <Link to="/pass-reset">Forget Password ?</Link>
              </div>
            </div>
            {signInError && (
              <p className="text-red-600">{signInError.message}</p>
            )}
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
