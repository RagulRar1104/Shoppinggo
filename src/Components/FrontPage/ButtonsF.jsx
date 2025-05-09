import React, { useContext } from "react";
import { BsBagHeartFill } from "react-icons/bs";
import { SiHomebridge } from "react-icons/si";
import { FaOpencart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Carts/CartContext";

function ButtonsF() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-gray-100 to-gray-200 shadow-md py-4">
      <div className="flex justify-center items-center gap-4 flex-wrap px-4">
        {/* Button Links */}
        <Link to={"/Frontfull"} className="w-auto no-underline">
          <button className="py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:from-blue-600 hover:to-blue-700">
            <SiHomebridge className="text-xl" />
            <span className="text-sm font-medium">Home</span>
          </button>
        </Link>

        <Link to={"/Grocery"} className="w-auto no-underline">
          <button className="py-2 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:from-green-600 hover:to-green-700">
            <BsBagHeartFill className="text-xl" />
            <span className="text-sm font-medium">Grocery</span>
          </button>
        </Link>

        <Link to={"/Mobiles"} className="w-auto no-underline">
          <button className="py-2 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:from-yellow-600 hover:to-yellow-700">
            <BsBagHeartFill className="text-xl" />
            <span className="text-sm font-medium">Mobiles</span>
          </button>
        </Link>

        <Link to={"/Fashion"} className="w-auto no-underline">
          <button className="py-2 px-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:from-pink-600 hover:to-pink-700">
            <BsBagHeartFill className="text-xl" />
            <span className="text-sm font-medium">Fashion</span>
          </button>
        </Link>

        <Link to={"/Electronics"} className="w-auto no-underline">
          <button className="py-2 px-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:from-purple-600 hover:to-purple-700">
            <BsBagHeartFill className="text-xl" />
            <span className="text-sm font-medium">Tech</span>
          </button>
        </Link>

        <Link to={"/HomeApp"} className="w-auto no-underline">
          <button className="py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:from-red-600 hover:to-red-700">
            <BsBagHeartFill className="text-xl" />
            <span className="text-sm font-medium">Home-App</span>
          </button>
        </Link>

        <Link to={"/Toys"} className="w-auto no-underline">
          <button className="py-2 px-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:from-teal-600 hover:to-teal-700">
            <BsBagHeartFill className="text-xl" />
            <span className="text-sm font-medium">Toys</span>
          </button>
        </Link>

        {/* Cart Button */}
        <button
          onClick={() => navigate("/CartPage")}
          className="relative py-2 px-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:from-indigo-600 hover:to-indigo-700"
        >
          <FaOpencart className="text-xl" />
          <span className="text-sm font-medium">Cart</span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cart.length}
          </span>
        </button>
      </div>
    </div>
  );
}

export default ButtonsF;
