import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const[cart, setCart] = useState([]);

    const AddToCart = async(product) => {
      
    
    try {
        const data = await axios.post('https://trend-wear-test-z9so.vercel.app/Cart', product, {withCredentials:true})
        setCart(prev=>[...prev, data]) 
        console.log(data)
    } catch (error) {
         if(error.response.status==401){
        alert('You are not login Please login')
        window.location.href = '/Login'
    
    }
        console.log(error, 'Not found')
    }
  
    console.log(cart)
    }

    return(
        <CartContext.Provider value={{AddToCart, cart, setCart}} >
            {children}
        </CartContext.Provider>
    )
}


