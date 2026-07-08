import { useEffect, useRef, useState } from "react"

import '../Styles/FilterAllProducts.css'
import axios from "axios"

const FilterAllProducts = () => {
    const[allProductData, setAllProductData] = useState([]);
    const[inputVal, setInputVal] = useState('')
    // const[filteredData, setFilteredData] = useState([])
     const inputRef = useRef(null)



    useEffect(()=>{
        const fetchingFn = async() =>{
           try {
            const res = await axios('https://trend-wear-test-z9so.vercel.app/filterItem',{withCredentials:true})
            console.log(res.data)
           setAllProductData(res.data)
           } catch (error) {
             if(error.response.status==401){
        alert('You are not login Please login')
        window.location.href = '/Login'
    
    }
            console.log(error)
           }
            
        }
        fetchingFn()
    },[])

    const filteredData = allProductData.filter(item => {
            // console.log(item.name)
        return(
            
            item.name.toLowerCase().includes(inputVal)
        )
        
          
        
    })

    useEffect(()=>{
        inputRef.current.focus()
    },[])





    return(
        <>
         <section className="filterNavbar-main">
        <div className="filterPage-img-logo-container">
            <img className="filterPage-img-logo" src="./Images/trendzWear1.png" alt="" />
        </div>
        <div>
            <input className="filterPage-inp" onChange={(e)=>{setInputVal(e.target.value)}} value={inputVal} ref={inputRef} type="text" name="" id="" />    
            <button className="filterPage-search-btn">search</button>
        </div>       
        <div>
            <button className="filterPage-cart-btn" onClick={()=> {AddToCart(item)}}>Cart</button>
        </div>       

    </section>
        
      <section className="product-container">
             {filteredData.map((item, index)=>{
                return(
                    <div className="product-cards" key={index}> 
                        <div className="allP-img-container">
                            <img className="category-image" src={item.image} alt="" />
                        </div>
                       <div className="allP-detail-container"> 
                        <h3 className="allP-name">{item.name}</h3>
                       <div className="allP-subDetail-container">
                         <h4 className="allP-price">Price: {item.price}</h4>
                        <button className="filterPage-addToCart">Add to Cart</button></div>
                       </div>
                    </div>
                )
            })
            }
           </section>
        </>
    )
}
export default FilterAllProducts