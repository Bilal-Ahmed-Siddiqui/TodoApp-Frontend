import React, {useState, useEffect} from "react";
import loginPic from "../assets/login-illustration.png";
import axios from "axios";
const Login = () => {
  const [creds, setcreds] = useState({email: "", password: ""})
  const onChange = (e) => {
    setcreds({ ...creds, [e.target.name]: e.target.value });
    console.log(creds)
  };

  useEffect(() => {
    const handleLogin = () => {
      const response = axios.post("http://localhost:3000/user/login", creds)

      if(true){
        
      }
    }
  

  }, [])
  
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

              <h2 className="text-2xl font-semibold mb-4 mt-32">Login</h2>
              <input
                type="email"
                placeholder="email"
                name = "email"
                className="mb-4 p-2 border border-gray-300 rounded w-64"
                onChange={onChange}
              />
              <input
                type="password"
                placeholder="Password"
                name = "password"
                className="mb-4 p-2 border border-gray-300 rounded w-64"
                onChange={onChange}

              />
              <button className="bg-[#8681FF] text-white py-2 px-6 rounded hover:bg-[#7a76eb] mb-4">
                Login
              </button>

              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <span className="text-[#8681FF] cursor-pointer">
                  Sign up now
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
  );
};

export default Login;
