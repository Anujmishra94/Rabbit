import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.webp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Login:',{ email, password});
  };

  return (
    <div className="flex">
      {/* Left Side Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="text-xl font-bold text-center mb-6">Hey there!</h2>
          <p className="text-center mb-6">
            Login to your account to continue
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300"
          >
            Sign In
          </button>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Right Side Image */}
      <div className="hidden md:block md:w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center">
          <img
            src={login}
            alt="Login to account"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
