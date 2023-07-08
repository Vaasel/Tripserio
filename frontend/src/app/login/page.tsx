import Footer from "@/components/Footer";

const Login = () => {
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
            <label htmlFor="password" className="text-gray-500">
              Password
            </label>
            <input
              type="password"
              className="border-2 rounded-lg w-full h-12 px-4 my-2"
            />
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
