import React, {createContext, useContext, useState} from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cartItems , setCartItems] = useState([]);
    const [totalAmount , setTotalAmount] = useState(0);
    const [totalUnits , setTotalUnits] = useState(0);

    const removeOneFromCart = (id) => {
        const index = cartItems.findIndex((item) => item.id === id);
        if (index !== -1) {
          const newCart = [...cartItems];
          newCart.splice(index, 1);
          setCartItems(newCart);
        }
      };
    
      const removeAllFromCart = (id) => {
        const newCart = cartItems.filter((item) => item.id !== id);
        setCartItems(newCart);
      };
    

    const values = {
        cartItems,
        setCartItems,
        totalAmount,
        setTotalAmount,
        totalUnits,
        setTotalUnits,
        removeOneFromCart,
        removeAllFromCart
    }


  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext =()=>{
    return useContext(CartContext);
}

// export default CartContext
