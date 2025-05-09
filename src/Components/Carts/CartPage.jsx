import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Carts/CartContext";
import { FaPlusCircle, FaMinusCircle, FaTrashAlt } from "react-icons/fa";
import { formatCurrency } from "../Carts/formatcurrency";
import ButtonsF from "../FrontPage/ButtonsF";

const CartPage = () => {
  const { cart, updateItemQuantity, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  // Calculate total price
  const calculateTotal = () =>
    cart.reduce((total, item) => {
      const price = Array.isArray(item.prices)
        ? parseInt(item.prices[0].replace(/[^0-9]/g, ""), 10)
        : parseInt(item.prices.replace(/[^0-9]/g, ""), 10);
      return total + price * item.quantity;
    }, 0);

  const calculateTotalQuantity = () =>
    cart.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);

  const handleBuyNow = () => {
    navigate("/invoice", {
      state: { totalPrice: calculateTotal(), totalQuantity: calculateTotalQuantity() },
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ButtonsF />

      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty!</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg"
            >
              {/* Dynamic Product Image */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              )}

              <div className="flex-1 px-4">
                <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                <p className="text-sm text-gray-500">
              Prices:{" "}
  {Array.isArray(item.prices)
    ? item.prices.map((price, index) => (
        <span key={index} className="mr-2">
          {formatCurrency(price)}
        </span>
      ))
    : formatCurrency(item.prices)}
</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="text-blue-500 hover:text-blue-700 disabled:text-gray-300"
                >
                  <FaMinusCircle size={20} />
                </button>
                <span className="text-lg font-semibold text-gray-800">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaPlusCircle size={20} />
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                <FaTrashAlt size={20} />
              </button>
            </div>
          ))}

          <div className="bg-white shadow-md p-4 rounded-lg mt-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Total Quantity:</h2>
            <p className="text-xl font-semibold text-gray-800">
              {calculateTotalQuantity()}
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg mt-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Total Price:</h2>
            <p className="text-xl font-semibold text-gray-800">
              {formatCurrency(calculateTotal())}
            </p>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              onClick={handleBuyNow}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;