import React, { useState } from 'react';
import loginPic from "../assets/login-illustration.png";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [creds, setcreds] = useState({ username: "", email: "", password: "" });
  const navigator = useNavigate();
  const onChange = (e) => {
    setcreds({ ...creds, [e.target.name]: e.target.value });
    // console.log(creds);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/signup", creds);
      if (response.status === 201) {
        alert(response.data.message)
        navigator("/login")
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.data.message) {
          return alert(error.response.data.message)
        }
        error.response.data.error.errors.forEach(error => {
          alert(error.msg)

        });
      }
      else{
        alert("some error occured")
      }
    }
  };

  return (
    <div className="m-10 rounded-lg shadow-lg bg-[#FFE6DF]" style={{ margin: "5%" }}>
      <div className="flex">
        <div className="w-1/2">
          <div className="bg-gray-100 p-6 flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-4xl font-bold mb-2">Todo Application</h2>
            <p className="text-lg text-gray-500 mb-6">Just Todo it</p>

            <h2 className="text-2xl font-semibold mb-4 mt-32">Sign up</h2>
            <form onSubmit={handleSignup}>
              <input
                type="text"
                placeholder="Username"
                className="mb-4 p-2 border border-gray-300 rounded w-full"
                name="username"
                onChange={onChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={onChange}
                className="mb-4 p-2 border border-gray-300 rounded w-full"
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChange}
                className="mb-4 p-2 border border-gray-300 rounded w-full"
                required
              />
              <button className="bg-[#8681FF] text-white py-2 px-6 rounded hover:bg-[#7a76eb] w-full mb-4" type="submit">
                Sign up
              </button>
            </form>

            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-[#8681FF] cursor-pointer">
                Log in
              </Link> instead
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <img src={loginPic} alt="Login illustration" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
