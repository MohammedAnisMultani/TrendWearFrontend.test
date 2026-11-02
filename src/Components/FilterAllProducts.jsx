import { useEffect, useRef, useState } from "react"

import '../Styles/FilterAllProducts.css'
import axios from "axios"
import Navbar from "./Navbar";
import About from "./About";

const FilterAllProducts = () => {
    const[allProductData, setAllProductData] = useState([]);
    const[inputVal, setInputVal] = useState('')
    const[asideCurrentStatus, setAsideCurrentStatus] = useState(0);
    const inputRef = useRef(null)
//pagination state
    const [pageNumber, setPageNumber] = useState(1);
    const PAGE_SIZE = 12;
//Skeleton Template
    const [isLoadingFilterPage, setIsLoadingFilterPage] = useState(true)

     const asideBanner = [
    // {url : "/Images/mens-collection-aside-banner.png"},
        {url : "/Images/women-collection-aside-banner1.png"},
        {url : '/Images/kids-collection-aside-banner.png'},
        {url : '/Images/accessories-collection-aside-banner.png'
    }
]

const pageHandler = (value) => {
    setPageNumber(value)
}

    useEffect(()=>{
        const fetchingFn = async() =>{
            setIsLoadingFilterPage(true)
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
           finally{
                setIsLoadingFilterPage(false);
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

//Skeleton Template 
const FilterProductSkeleton = () => (
  <div className="product-cards !bg-green-50 shadow-2xl !border-none animate-pulse">
    {/* Product image */}
    <div className="allP-img-container">
      <div className="w-full h-48 bg-gray-200" />
    </div>

    <div className="allP-detail-container">
      {/* Product name (centered) */}
      <div className="h-5 w-2/3 mx-auto mt-2 mb-3 rounded bg-gray-300" />

      {/* Price on the left, button on the right */}
      <div className="allP-subDetail-container">
        <div className="h-5 w-20 rounded bg-gray-300" />
        <div className="h-9 w-28 rounded-md bg-gray-300" />
      </div>
    </div>
  </div>
);

    //pagination code
    const totalPages = Math.ceil(filteredData.length/PAGE_SIZE);
    // console.log(totalPages)
    const currentPage = filteredData.slice((pageNumber-1)*PAGE_SIZE,pageNumber*PAGE_SIZE);


    useEffect(()=>{
        inputRef.current.focus()
    },[])



    useEffect(()=>{
         const asideBannerTimer = setTimeout(()=>{
           setAsideCurrentStatus((prev) => (prev >= 2 ? 0 : prev+1))
        },5000)

        return () => clearInterval(asideBannerTimer)
    },[asideCurrentStatus])


    return(
        <>
           {/* //----------------- */}
           {/* TailwindCSS  */}


    <section className="flex justify-between items-center p-2 pl-8 pr-8 bg-green-900">
        <div className="filterPage-img-logo-container">
            <img className="filterPage-img-logo" src="./Images/trendzwear-logo-updated.png" alt="" />
        </div>
        <div>
            <input className="filterPage-inp bg-green-50 rounded-l-xl focus:outline-none" onChange={(e)=>{setInputVal(e.target.value)}} value={inputVal} ref={inputRef} type="text" name="" id="" />    
            <button className="filterPage-search-btn bg-green-50 rounded-r-xl font-bold hover:bg-yellow-400 duration-300 hover:!text-green-50">search</button>
        </div>       
        {/* <div>
            <button className="filterPage-cart-btn" onClick={()=> {AddToCart(item)}}>Cart</button>
        </div>     */}
        <div className="flex gap-4 text-white !mb-0">
            <div className='flex flex-col items-center relative group hover:cursor-pointer'> 
                <span className="material-symbols-outlined hover:text-yellow-300">home</span>
                <p className='text-xs'>Home</p>
                <span className='absolute left-0 bottom-2 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300' ></span>
            </div>
            <div className='flex flex-col items-center relative group hover:cursor-pointer'>
                <span  onClick={()=>navigate('/Cart')} className="material-symbols-outlined hover:text-yellow-300">shopping_cart</span>
                <p className='text-xs'>Cart</p>
                 <span className='absolute left-0 bottom-2 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300' ></span>
            </div>   
        </div>

    </section>
        
      <section className=" flex mt-8 justify-between">
             <aside className="flex flex-col mt-4 m-4 !h-200 ">
                <h1 className="bg-gray-300 p-2 text-center !font-bold text-xl ">Get 20% 0ff on your first order</h1>
            <img className="w-110" src={asideBanner[asideCurrentStatus].url}  alt="Image Not Found"  />
           </aside>
            <div className="grid grid-cols-4 bg-gray-300 p-2 ">
                 {
                    isLoadingFilterPage ? 
                    Array.from({length:12}).map((_,i)=>FilterProductSkeleton())
                    :
                    currentPage.map((item, index)=>{
                return(
                    <div className="product-cards !bg-green-50 shadow-2xl !border-none" key={index}> 
                        <div className="allP-img-container">
                            <img className="category-image" src={item.image} alt="" />
                        </div>
                       <div className="allP-detail-container"> 
                        <h3 className="allP-name text-black !font-bold">{item.name}</h3>
                       <div className="allP-subDetail-container">
                         <h4 className="allP-price text-black !font-bold">Price: {item.price}</h4>
                        <button className="filterPage-addToCart !bg-green-800 !text-green-50 !p-2">Add to Cart</button></div>
                       </div>
                    </div>
                )
            })
            }
                 
            </div>
           </section>


        <section className="flex items-center justify-center gap-3 m-1">
            <span>
                <button onClick={() => pageHandler(pageNumber > 1 ? pageNumber-1 : pageNumber)} className="p-1 border hover:bg-amber-200 duration-300 cursor-pointer">◀</button>
            </span>
            {Array.from({length:totalPages}).map((_,i) => {
                return(
                    <span className="">
                        <button onClick={(e) => pageHandler(i+1)} className="p-1 pb-1 w-6 bg-green-400 hover:bg-amber-200 duration-300 cursor-pointer">{i+1}</button>
                    </span>
                )
            })}
            <span>
                <button onClick={() => pageHandler(pageNumber < totalPages ? pageNumber+1 : pageNumber)} className="p-1 border hover:bg-amber-200 duration-300 cursor-pointer">
                    ▶
                </button>
            </span>
        </section>
        <About/>
        </>
    )
}
export default FilterAllProducts


// _________________________________________________________________________
{/* <section className="filterNavbar-main">
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
           </section> */}