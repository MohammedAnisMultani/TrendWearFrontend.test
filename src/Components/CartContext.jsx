import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const[cart, setCart] = useState([]);

//for Badge icon:
    useEffect(() => {
  axios.get('https://trend-wear-test-z9so.vercel.app/Cart', { withCredentials: true })
    .then(res => setCart(Array.isArray(res.data) ? res.data : []))
    .catch(() => {}); // not logged in: ignore
}, []);

    const AddToCart = async(product) => {
      
    
    try {
        const data = await axios.post('https://trend-wear-test-z9so.vercel.app/Cart', product, {withCredentials:true})
        setCart(prev=>[...prev, data.data]) 
        // alert("Product Added to cart")
        toast.success("Product added to Cart")
        console.log(data.data)
    } catch (error) {
         if(error.response.status==401){
        toast.info("Please log in to continue")
        setTimeout(()=> {window.location.href = '/Login'}, 1200);
    
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


