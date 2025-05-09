import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCashRegister, FaCcMastercard, FaMobileAlt, FaArrowLeft } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaOpencart } from "react-icons/fa6";

const InvoicePage = () => {
  const location = useLocation();
  const { totalPrice, totalQuantity } = location.state || {};
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [hasShopped, setHasShopped] = useState(false);
  const [showGIF, setShowGIF] = useState(false);
  const navigate = useNavigate();

  const handleAddressSubmit = () => {
    if (name.trim() !== "" && address.trim() !== "" && deliveryTime) {
      setIsAddressSubmitted(true);
    }
  };

  const handleContinueShopping = () => {
    setShowGIF(true);
    setTimeout(() => {
      setHasShopped(true);
      setShowGIF(false);
    }, 3000);
  };

  const handleGoHome = () => {
    navigate("/Frontfull");
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const navigateToCart = () => {
    navigate("/CartPage");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-blue-200 min-h-screen">
      {/* Fixed Back Arrow */}
      <div
        className="fixed top-4 left-4 cursor-pointer p-2 bg-blue-800 text-white rounded-full shadow-lg hover:bg-green-700"
        onClick={navigateToCart}
      >
        <FaArrowLeft className="text-2xl" />
      </div>

      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center mb-2">
          <h1 className="text-5xl font-bold text-gray-800">Shopingo</h1>
          <FaOpencart className="text-5xl font-bold text-yellow-600 ml-2" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">---INVOICE----</h1>
      </div>

      <div className="bg-white shadow-2xl p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800">Purchase Summary</h2>
        <div className="mt-4">
          <p className="text-lg text-gray-700">Total Quantity: {totalQuantity}</p>
          <p className="text-lg text-gray-700">Total Price: ₹{totalPrice}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-gray-800">Enter Your Details</h3>
          {!isAddressSubmitted ? (
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                className="mt-4 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Preferred Delivery Time</h4>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="morning"
                    checked={deliveryTime === "morning"}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="form-radio text-blue-500"
                  />
                  <span className="text-gray-700">Morning</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="evening"
                    checked={deliveryTime === "evening"}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="form-radio text-blue-500"
                  />
                  <span className="text-gray-700">Evening</span>
                </label>
              </div>
              <button
                onClick={handleAddressSubmit}
                className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          ) : (
            <div>
              <p className="mt-4 text-lg text-gray-700">Name: {name}</p>
              <p className="mt-2 text-lg text-gray-700">Address: {address}</p>
              <p className="mt-2 text-lg text-gray-700">Delivery Time: {deliveryTime}</p>
            </div>
          )}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-gray-800">Select Payment Method</h3>
          <div className="flex flex-col space-y-4 mt-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={handlePaymentMethodChange}
                className="form-radio text-blue-500"
              />
              <FaCashRegister className="text-xl text-green-500" />
              <span className="text-lg text-gray-700">Cash on Delivery</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={handlePaymentMethodChange}
                className="form-radio text-blue-500"
              />
              <FaMobileAlt className="text-xl text-blue-500" />
              <span className="text-lg text-gray-700">UPI Payment</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={handlePaymentMethodChange}
                className="form-radio text-blue-500"
              />
              <FaCcMastercard className="text-xl text-yellow-600" />
              <span className="text-lg text-gray-700">Card Payment</span>
            </label>
          </div>
        </div>

        <div className="mt-6">
          {!hasShopped ? (
            <button
              onClick={handleContinueShopping}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
            >
              Continue Shopping
            </button>
          ) : (
            <div className="text-center">
              <IoMdCheckmarkCircleOutline className="mx-auto text-6xl text-green-500" />
              <p className="mt-4 font-semibold text-lg text-gray-700">
                Thank you for shopping with us!
              </p>
              <button
                onClick={handleGoHome}
                className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
              >
                Go to Home
              </button>
            </div>
          )}
        </div>
      </div>

      {showGIF && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <img
            src={require(`../Assets/Logo-Gif/onlineshopy.gif`)}
            alt="Loading..."
            className="w-3/4 h-3/4 object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default InvoicePage;