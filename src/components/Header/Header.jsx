import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import logo from "../../img/BIG_STORE.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../fireBase.init";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Home = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    toast.success("Sign Out");
  };
  return (
    <div>
      <nav
        className="
relative
w-full
flex flex-wrap
items-center
justify-between
py-1
bg-gray-100
text-gray-500
hover:text-gray-700
focus:text-gray-700
shadow-lg
navbar navbar-expand-lg navbar-light
"
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="
    navbar-toggler
    text-gray-500
    border-0
    hover:shadow-none hover:no-underline
    py-2
    px-2.5
    bg-transparent
    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <Link to="/">
              <img className="h-[60px]" src={logo} alt="" />
            </Link>
            <ul className="navbar-nav flex flex-col pl-0 items-center list-style-none ml-auto">
              <li className="nav-item px-2">
                <CustomLink className="nav-link" to="/">
                  Home
                </CustomLink>
              </li>
              <li className="nav-item pr-2">
                <CustomLink className="nav-link" to="/manage-items">
                  Manage Items
                </CustomLink>
              </li>
              <li className="nav-item pr-2">
                <CustomLink className="nav-link" to="/add-items">
                  Add Item
                </CustomLink>
              </li>
              <li className="nav-item pr-2">
                <CustomLink className="nav-link" to="/my-items">
                  My items
                </CustomLink>
              </li>

              {user?.uid ? (
                <>
                  <button
                    onClick={handleSignOut}
                    className=" bg-orange-400 nav-btn font-semibold px-5 py-2 rounded-lg"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <li className="nav-item pr-2 text-white">
                  <CustomLink
                    className=" bg-orange-400 nav-btn font-semibold px-5 py-3 rounded-lg"
                    to="/signIn"
                  >
                    Sign in
                  </CustomLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
