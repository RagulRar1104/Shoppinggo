import React, { useState } from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai"; 

const Register = () => {
  const [ussers, setussers] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setussers((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((user) => user.username === ussers.username)) {
      setErrorMessage("User already exists!");
      return;
    }
    users.push({ username: ussers.username, password: ussers.password });
    localStorage.setItem("users", JSON.stringify(users));
    setussers({ username: "", password: "" });
    setErrorMessage("Registration successful!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-5">
          ShoppinG-Go
        </h2>
        <h4 className="text-xl font-semibold text-orange-800 text-center mb-6">
          Register Your-Self
        </h4>

        <div className="relative mb-6">
          <AiOutlineUser className="absolute left-3 top-3 text-xl text-gray-500" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={ussers.username}
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
            value={ussers.password}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-bold rounded-lg hover:scale-105 transform transition duration-300"
        >
          Register
        </button>

        {errorMessage && (
          <p
            className={`mt-4 text-center font-medium ${
              errorMessage === "Registration successful!"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {errorMessage}
          </p>
        )}

        <div className="text-center mt-6">
          <span className="text-gray-600">Already have an account? </span>
          <a
            href="/Login"
            className="text-blue-500 hover:underline font-medium"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
