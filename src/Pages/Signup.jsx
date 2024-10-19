import React from 'react'
import loginPic from "../assets/login-illustration.png";

const Signup = () => {
  return (
    <>
    <div
      className="m-10 rounded-lg shadow-lg bg-[#FFE6DF]"
      style={{ margin: "5%" }}
    >
      <div className="flex">
        <div className="w-1/2">
          <div className="bg-gray-100 p-6 flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-4xl font-bold mb-2">Todo Application</h2>
            <p className="text-lg text-gray-500 mb-6">Just Todo it</p>

            <h2 className="text-2xl font-semibold mb-4 mt-32">Sign up</h2>
            <input
              type="test"
              placeholder="username"
              className="mb-4 p-2 border border-gray-300 rounded w-64"
            />
            <input
              type="email"
              placeholder="email"
              className="mb-4 p-2 border border-gray-300 rounded w-64"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-4 p-2 border border-gray-300 rounded w-64"
            />
            <button className="bg-[#8681FF] text-white py-2 px-6 rounded hover:bg-[#7a76eb] mb-4">
              Sign up
            </button>

            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span className="text-[#8681FF] cursor-pointer">
                Log in instead
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/2">
          {/* Section 2 content */}
          <img src={loginPic} alt="" />
        </div>
      </div>
    </div>
  </>
  )
}

export default Signup