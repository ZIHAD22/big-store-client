import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../fireBase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const Registration = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [
    createUserWithEmailAndPassword,
    signUpUser,
    signUpLoading,
    signUpError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleRegistration = (data) => {
    const { userName, password, email, confirmPassword, agree } = data;
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      toast.warning("Password dosen't match with confirm password ");
    }
  };

  if (signUpLoading) {
    return <Loading />;
  }

  if (signUpUser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="bg-registration-img h-screen bg-center bg-cover">
      <div className="opacity-90 bg-white h-full">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <h1 className="text-4xl pt-1 font-serif font-sans text-center">
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
                id="lastName"
                placeholder="Last Name"
              />
            </div>
            {/* part 2 */}
            <div className="grid grid-cols-2 gap-x-2">
              <div>
                <input
                  type="text"
                  className="form-control w-full mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                  id="userName"
                  {...register("userName", { required: "Required" })}
                  placeholder="User Name"
                />
                <div>
                  {errors && (
                    <p className="text-red-600">{errors.userName?.message}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control w-full mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
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
            {/* part 3 */}
            <div className="grid grid-cols-2 gap-x-2">
              <div>
                <input
                  type="password"
                  className="form-control w-full mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
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
              <div>
                <input
                  type="password"
                  className="form-control w-full mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                  id="confirmPassword"
                  {...register("confirmPassword", { required: "Required" })}
                  placeholder="Confirm Password"
                />
                <div>
                  {errors && (
                    <p className="text-red-600">
                      {errors.confirmPassword?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-4 items-center">
              <div>
                <div>
                  <input
                    className=""
                    type="checkbox"
                    name="agree"
                    {...register("agree", { required: "Required" })}
                    id="agree"
                  />
                  <span className="font-serif">
                    Accept All Trams and Condition ?
                  </span>
                </div>
                <div>
                  {errors && (
                    <p className="text-red-600">{errors.agree?.message}</p>
                  )}
                </div>
              </div>
              <div className="text-blue-900 hover:underline">
                <Link to="/signIn">Already Registered ?</Link>
              </div>
            </div>

            {signUpError && (
              <p className="text-red-600">{signUpError.message}</p>
            )}

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
