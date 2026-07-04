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
        <div>
            <p>logo</p>
        </div>
        <div>
            <input onChange={(e)=>{setInputVal(e.target.value)}} value={inputVal} ref={inputRef} type="text" name="" id="" />    
            <button>search</button>
        </div>       
        <div><button onClick={()=> {AddToCart(item)}}>Add to Cart</button></div>       

    </section>
        
      <section className="product-container">
             {filteredData.map((item, index)=>{
                return(
                    <div className="product-cards" key={index}> 
                        <h1>{item.name}</h1 >
                        <img className="category-image" src="/Images/srk-men-collection-image.jpg" alt="" />
                        <h2>Price: {item.price}</h2>
                        <button>Add to Cart</button>
                    </div>
                )
            })
            }
           </section>
        </>
    )
}
export default FilterAllProducts