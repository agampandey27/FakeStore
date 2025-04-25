import React from "react";
import { useCartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyCart = () => {
  const { cartItems, removeOneFromCart, removeAllFromCart } = useCartContext();

  const errorMessage=(msg)=> {toast.error(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
      });}

  // Group repeated items by product ID
  const groupedItems = cartItems.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 1 };
    } else {
      acc[item.id].quantity += 1;
    }
    return acc;
  }, {});

  const finalItems = Object.values(groupedItems);

  const totalUnits = finalItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = finalItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">🛒 My Cart</h1>

      {finalItems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">Your cart is empty.</div>
      ) : (
        <>
          <div className="grid gap-6">
            {finalItems.map((item) => (
              
              <Link key={item.id} to={`/product/${item.id}`}>
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-md p-4 rounded-xl border"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-[#111]">{item.title}</h2>
                  <p className="text-gray-500 text-sm">{item.category}</p>
                  <p className="mt-2 text-sm text-gray-600">{item.description.slice(0, 100)}...</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-sm text-gray-700">Price: ${item.price}</p>
                  <p className="text-sm text-gray-700">Qty: {item.quantity}</p>
                  <p className="font-semibold text-green-700">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Remove buttons */}
                  <div className="mt-2 flex flex-col gap-2">
                    <button
                      onClick={(e) =>{
                        e.preventDefault();
                        errorMessage("Item Removed !")
                        removeOneFromCart(item.id)}}
                      className="text-sm px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
                    >
                      Remove One
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        errorMessage("All Item Removed");
                        removeAllFromCart(item.id)}}
                      className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Remove All
                    </button>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 p-4 border-t">
            <h2 className="text-2xl font-bold">Cart Summary</h2>
            <div className="flex justify-between text-lg mt-2">
              <span>Total Units:</span>
              <span>{totalUnits}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Total Amount:</span>
              <span className="text-green-700 font-semibold">${totalAmount}</span>
            </div>
          </div>
        </>
      )}
      <ToastContainer/>
    </div>
  );
};

export default MyCart;
