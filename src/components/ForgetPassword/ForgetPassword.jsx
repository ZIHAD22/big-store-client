import React from "react";
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../fireBase.init";
import { async } from "@firebase/util";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const ForgetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const handlePasswordReset = async (data) => {
    const { email } = data;
    await sendPasswordResetEmail(email);
    toast.success("Password Reset Email Send");
  };

  if (sending) {
    return <Loading />;
  }

  return (
    <div className="bg-registration-img h-screen bg-center bg-cover">
      <div className="opacity-90 bg-white h-full">
        <div className="md:w-1/2 xs:mx-5 mx-auto">
          <form onSubmit={handleSubmit(handlePasswordReset)}>
            <h1 className="text-center text-4xl text-gray-700 my-6">
              Reset Password
            </h1>
            <div>
              <input
                type="email"
                className="form-control mt-4 block px-3 py-1.5 text-font-normal text-gray-800 bg-white bg-clip-padding w-full border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                id="email"
                {...register("email", { required: "Required" })}
                placeholder="Email"
              />
              <div>
                {errors && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              {/* <div>
                {error && <p className="text-red-600">{error?.message}</p>}
              </div> */}
              <button
                type="submit"
                className="bg-orange-400 nav-btn font-semibold px-5 py-2 rounded-lg block mx-auto md:w-1/2 my-2 hover:bg-orange-500"
              >
                Send Password Reset Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
