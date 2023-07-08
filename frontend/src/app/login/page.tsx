"use client";
import Footer from "@/components/Footer";
import { useState } from "react";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <>
      <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
        <div className="rounded-xl bg-white">
          <div className="p-6 sm:p-16">
            <div className="space-y-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Circle_Davys-Grey_Solid.svg"
                loading="lazy"
                className="w-10 m-auto"
                alt="Tripserio logo"
              />
              <hr />
              <h2 className="mb-8 text-2xl text-center font-bold">Log in</h2>
              <p className="text-center">
                Don't have an account?{" "}
                <a
                  className="underline text-gray-700 hover:text-blue-700 focus:text-blue-700"
                  href="/signup"
                >
                  Sign up
                </a>
              </p>
            </div>
            <div className="mt-16 grid space-y-4">
              <button
                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
              >
                <div className="relative flex items-center space-x-4 justify-center">
                  <img
                    src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                    className="absolute left-0 w-5"
                    alt="google logo"
                  />
                  <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Continue with Google
                  </span>
                </div>
              </button>
              <button
                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
              >
                <div className="relative flex items-center space-x-4 justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png"
                    className="absolute left-0 w-5"
                    alt="Apple logo"
                  />
                  <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Continue with Apple
                  </span>
                </div>
              </button>
              <button
                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
              >
                <div className="relative flex items-center space-x-4 justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                    className="absolute left-0 w-5"
                    alt="Facebook logo"
                  />
                  <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Continue with Facebook
                  </span>
                </div>
              </button>
            </div>
          </div>
          <p className="text-center border-solid border-b-2">
            Or continue with email
          </p>
          <div className="p-4">
            <label htmlFor="Email" className="text-gray-500">
              Email address or username
            </label>
            <input
              type="text"
              className="border-2 rounded-lg w-full h-12 py-4 my-3"
            />
            <div className="relative">
              <label htmlFor="password" className="text-gray-500">
                Password
              </label>
              <button
                className="absolute inset-y-0 right-0 flex pt-0 pr-3 text-gray-600 align-middle"
                onClick={togglePasswordVisibility}
              >
                {" "}
                {isPasswordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
                <span className="pl-1.5 ">Hide</span>
              </button>

              <input
                type={isPasswordVisible ? "text" : "password"}
                className="border-2 rounded-lg w-full h-12 px-4 my-2"
              />
            </div>

            <div className="text-right mt-2 flex justify-between">
              <div>
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="checkbox_id"
                />
                <label className="text-sm" htmlFor="checkbox_id">
                  Remember Me
                </label>
              </div>

              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Forgot Password?
              </a>
            </div>
            <button
              className="w-full px-4 py-2 my-4 font-bold text-white bg-gray-300 rounded-full hover:bg-gray-500 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default Login;
