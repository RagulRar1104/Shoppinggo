import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai"; 

const Login = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (user) =>
        user.username === users.username && user.password === users.password
    );

    if (user) {
      setIsLoggedIn(true);
      setErrorMessage("");
      navigate("/Frontfull"); 
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen relative bg-cover bg-center"
      style={{
        background: "linear-gradient(to right, #ff7e5f, #feb47b)", 
      }}
    >
      <div className="absolute top-0 w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="flex justify-between items-center px-8">
          <h1 className="text-4xl font-extrabold tracking-wide flex items-center gap-3">
            Shopping Go
            <FaOpencart className="text-5xl animate-pulse" /> 

          </h1>
        </div>
      </div>

      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-sm mt-16 mb-8 bg-opacity-90">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Welcome Back!
        </h2>
        <div className="relative mb-6">
          <AiOutlineUser className="absolute left-3 top-3 text-xl text-gray-500" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={users.username}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative mb-6">
          <AiOutlineLock className="absolute left-3 top-3 text-xl text-gray-500" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={users.password}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg hover:scale-105 transform transition duration-300"
        >
          Log In
        </button>
        {errorMessage && (
          <p className="mt-4 text-center text-sm text-red-500">{errorMessage}</p>
        )}
        <p className="text-center mt-6">
          <Link
            className="text-sm text-blue-500 hover:underline"
            to={"/"}
          >
            Don't have an account? Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
