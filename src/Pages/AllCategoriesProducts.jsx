    import { useContext, useEffect, useState } from "react";
    import About from "../Components/About";
    import Navbar from "../Components/Navbar";
    import { useParams } from "react-router-dom";
    import axios from 'axios'
    import "../Styles/AllCategoriesProducts.css"
import { CartContext } from "../Components/CartContext";


    const AllCategoriesProducts = () => {
        const {category} = useParams()    
        console.log(category)

        const[productList, setProductList] = useState([]);
        const[pageNumber, setPageNumber] = useState(1);
        const[asideCurrentStatus, setAsideCurrentStatus] = useState(0);


        const totalPages = (productList.length/10)
        console.log(totalPages)

        const {AddToCart} = useContext(CartContext)

const pageHandler = (selectedPage) => {
    setPageNumber(selectedPage);
}


const asideBanner = [
    {url : "/Images/mens-collection-aside-banner.png"},
        {url : "/Images/women-collection-aside-banner1.png"},
        {url : '/Images/kids-collection-aside-banner.png'},
        {url : '/Images/accessories-collection-aside-banner.png'
    }
]

    useEffect(()=>{

        const fetchProductFun = async() => {
            await axios(`https://trend-wear-test-z9so.vercel.app/api/product/${category}`, {withCredentials:true})
        .then((res) => {
            console.log(res.data)
            setProductList(res.data)
        })  
        .catch((error)=>{
             if(error.response.status==401){
        alert('You are not login Please login')
        window.location.href = '/Login'
    
    }
            console.log("Error fetching main product", err)
        })
        }
        fetchProductFun()

        // ----
       
        
    },[])


    useEffect(()=>{
         const asideBannerTimer = setTimeout(()=>{
           setAsideCurrentStatus((prev) => (prev >= 3 ? 0 : prev+1))
        },5000)

        return () => clearInterval(asideBannerTimer)
    },[asideCurrentStatus])
        

        return(
        <>
        <Navbar/>

        {/* ------ */}
        {/* <h1 className="allC-product-heading">{category} products</h1>
           <section className="allC-product-container">
             {productList.slice(pageNumber*10-10,pageNumber*10).map((item, index)=>{
                return(
                    <div className="allC-product-cards" key={index}> 
                        <h1>{item.name}</h1 >
                        <img className="allC-category-image" src={!item.image ? "/Images/srk-men-collection-image.jpg" : item.image} alt="Image Not Found" />
                        <div className="allC-category-lower">
                               <h2>Price: {item.price}</h2>
                               <button  onClick={()=> {AddToCart(item)}}>Add to Cart</button>
                        </div>
                    </div>
                )
            })
            }
           </section> */}

            {/* ------ */}

           {/* <div className="pagination">
            <span onClick={()=>pageHandler(pageNumber > 1 ? pageNumber-1 : pageNumber)}>◀</span>

            {...Array.from({length : totalPages},(_,index)=>(
                <span id="pageNumber-style" className={pageNumber == index+1 ? "clicked" : ""}  onClick={()=>pageHandler(index+1)}>{index+1}</span>
            ))}
            <span onClick={() => pageHandler(
                 pageNumber< totalPages ? pageNumber+1 : pageNumber
                )}>▶</span>
           </div> */}

           {/* -------- */}

{/* ________________________________________________________________________________________________________- */}
{/* tailwindcss  */}
            {/* ------ */}
            
        <section className="ml-3">
            <h1 className="text-green-900 text-4xl !mb-0 !font-bold">{category} products</h1>
        <p className="text-sm text-gray-400">Trendy style for every mood. Upgrade your wardrobe with the latest fashion.</p>
        </section>
          <div className="flex">
               <aside className="flex items-center !justify-center">
            <img className="w-90 h-full mr-5 ml-5" src={asideBanner[asideCurrentStatus].url}  alt=""  />
           </aside>
             <section className="bg-gray-300 grid grid-cols-4">
             {productList.slice(pageNumber*10-10,pageNumber*10).map((item, index)=>{
                return(
                    <div className="bg-white m-3 p-3 rounded-xl" key={index}> 
                        <img className="w-60 h-50 pb-2 rounded-2xl" src={!item.image ? "/Images/srk-men-collection-image.jpg" : item.image} alt="Image Not Found" />
                        <div className="">
                        <h1 className="!font-bold">{item.name}</h1 >
                               <h2>Price: {item.price}</h2>
                               <button className="flex items-center justify-between w-full p-1 pl-3 pr-3 rounded-xl !text-xs bg-green-900 hover:bg-gray-800" onClick={()=> {AddToCart(item)}}>
                                <p className="!mb-0 text-green-100">Add to Cart</p>
                                <span  className="material-symbols-outlined !text-base w-6 bg-yellow-300 rounded-sm">shopping_cart</span>
                                </button>
                        </div>
                    </div>
                )
            })
            }
           </section>
        
          </div>

            {/* ------ */}

           <div className="pagination">
            <span onClick={()=>pageHandler(pageNumber > 1 ? pageNumber-1 : pageNumber)}>◀</span>

            {...Array.from({length : totalPages},(_,index)=>(
                <span id="pageNumber-style" className={pageNumber == index+1 ? "clicked" : ""}  onClick={()=>pageHandler(index+1)}>{index+1}</span>
            ))}
            <span onClick={() => pageHandler(
                 pageNumber< totalPages ? pageNumber+1 : pageNumber
                )}>▶</span>
           </div>

           {/* -------- */}

        <About/>
        </>
    )
    }

    export default AllCategoriesProducts