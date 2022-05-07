import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../fireBase.init";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  if (googleLoading) {
    return (
      <div className="h-full">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <div>
        <div className="flex items-center">
          <div style={{ height: "1px" }} className="bg-orange-500 w-1/2"></div>
          <p className="mt-2 px-2">or</p>
          <div style={{ height: "1px" }} className="bg-orange-500 w-1/2"></div>
        </div>
      </div>
      <div className="hidden">{googleUser && toast.success("Sign In")}</div>
      {googleError && <p className="text-red-600">{googleError.message}</p>}
      <div className="text-center mt-4">
        <button
          onClick={handleGoogleSignIn}
          className="bg-[#4B7FE0] nav-btn font-semibold px-5 py-2 rounded-lg inline-block w-1/2 my-2 hover:bg-[#4B7FE0]"
        >
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
