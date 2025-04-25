import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../api/api.js';
import { useCartContext } from '../context/CartContext.jsx';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
    
    const {id} = useParams();
    const [productData, setProductData] = useState({})
    const {cartItems,setCartItems,totalAmount,setTotalAmount,totalUnits,setTotalUnits}=useCartContext();

    const successMessage=()=> {toast.success('Product Added to Cart!', {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
        });}

    const errorMessage=(msg)=> {toast.error(msg, {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
          });}

    useEffect(()=>{
        const getData = async()=>{
            try{
                const res = await getProductById(id);
                setProductData(res.data);
            }catch(e){
                console.log(e);
                // alert("failed to fetch data")
                errorMessage("Failed to fetch data")
            }
        }

        getData();
    },[])

    const addButtonCartLogic=()=>{
        setCartItems(prevCart=>[...prevCart,productData]);
        setTotalAmount(totalAmount+productData.price);
        setTotalUnits(totalUnits+1);
        successMessage();
    }

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 p-6 bg-white rounded-xl shadow-md max-w-5xl mx-auto mt-10">
  <img
    className="w-64 h-64 object-contain rounded-lg"
    src={productData.image}
    alt={productData.title}
  />

  <div className="flex flex-col gap-4 max-w-2xl">
    <h1 className="text-3xl font-bold text-gray-800">{productData.title}</h1>
    <p className="text-xl text-gray-600">Category: <span className="capitalize">{productData.category}</span></p>
    <p className="text-lg text-gray-700">{productData.description}</p>
    
    <div className="flex items-center gap-4">
      <span className="text-2xl font-semibold text-green-600">${productData.price}</span>
      {productData.rating && (
        <div className="flex items-center gap-1 text-yellow-500">
          <span className="text-lg">⭐ {productData.rating.rate}</span>
          <span className="text-gray-500 text-sm">({productData.rating.count} reviews)</span>
        </div>
      )}
    </div>

    <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transform transition duration-300 active:scale-90 hover:scale-97" onClick={addButtonCartLogic}>
      Add to Cart
    </button>
  </div>
  <ToastContainer/>
</div>

  )
}

export default ProductPage
