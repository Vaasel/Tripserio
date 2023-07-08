import Footer from "@/components/Footer";

const signup = () => {
  return (
    <>
      <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
        <div className="rounded-xl bg-white">
          <div className="p-6 sm:p-16">
            <div className="space-y-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Circle_Davys-Grey_Solid.svg"
                loading="lazy"
                className="w-10"
                alt="Tripserio logo"
              />
              <h2 className="mb-8 text-2xl text-center font-bold">
                Create an account
              </h2>
              <p className="text-center">
                Already have an account?{" "}
                <a
                  className="underline text-gray-700 hover:text-blue-700 focus:text-blue-700"
                  href="/login"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
          <div className="p-4">
            <label htmlFor="profile-name" className="text-gray-500">
              What should we call you?
            </label>
            <input
              type="text"
              placeholder="Enter your profile name"
              className="border-2 rounded-lg w-full h-12 px-4 my-3"
            />
            <label htmlFor="signup-email" className="text-gray-500">
              What's your Email?
            </label>
            <input
              type="text"
              placeholder="Enter your email address"
              className="border-2 rounded-lg w-full h-12 px-4 my-3"
            />
            <label htmlFor="password" className="text-gray-500">
              Create password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border-2 rounded-lg w-full h-12 px-4 my-2"
            />
            <div className="text-right mt-2 flex justify-between">
              <p className="text-sm">
                By creating an account, you agree to the{" "}
                <a href="#" className="underline">
                  Terms of use
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </p>
            </div>
            <button
              className="w-full px-4 py-2 my-4 font-bold text-white bg-gray-300 rounded-full hover:bg-gray-500 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create an account
            </button>
          </div>
          <div className="p-4">
            <p className="border-solid text-xl text-gray-500">
              Or continue with
            </p>
            <div className="mt-5 text-center p-3  space-y-3 grid-cols-5">
              <button
                className="group mr-3 h-12 px-6 w-min border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
              >
                <div className="relative flex items-center space-x-4 justify-center">
                  <img
                    src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                    className="absolute left-0 w-5 pr-2"
                    alt="google logo"
                  />
                  <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Google
                  </span>
                </div>
              </button>
              <button
                className="group h-12  mr-3  px-6 border-2 w-max border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
              >
                <div className="relative flex items-center space-x-4 justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png"
                    className="absolute left-0 w-5 pr-2"
                    alt="Apple logo"
                  />
                  <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Apple
                  </span>
                </div>
              </button>
              <button
                className="group h-12 px-6 border-2 w-max border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
              >
                <div className="relative flex items-center space-x-4 justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                    className="absolute left-0 w-5 pr-2"
                    alt="Facebook logo"
                  />
                  <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Facebook
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default signup;
