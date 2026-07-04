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

        const totalPages = (productList.length/10)
        console.log(totalPages)

        const {AddToCart} = useContext(CartContext)

const pageHandler = (selectedPage) => {
    setPageNumber(selectedPage);
}

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

        
    },[])
        


        return(
        <>
        <Navbar/>
        <h1 className="product-heading">{category} products</h1>
           <section className="product-container">
             {productList.slice(pageNumber*10-10,pageNumber*10).map((item, index)=>{
                return(
                    <div className="product-cards" key={index}> 
                        <h1>{item.name}</h1 >
                        <img className="category-image" src={!item.image ? "/Images/srk-men-collection-image.jpg" : item.image} alt="Image Not Found" />
                        <div className="category-lower">
                               <h2>Price: {item.price}</h2>
                               <button onClick={()=> {AddToCart(item)}}>Add to Cart</button>
                        </div>
                    </div>
                )
            })
            }
           </section>

           <div className="pagination">
            <span onClick={()=>pageHandler(pageNumber > 1 ? pageNumber-1 : pageNumber)}>◀</span>

            {...Array.from({length : totalPages},(_,index)=>(
                <span id="pageNumber-style" className={pageNumber == index+1 ? "clicked" : ""}  onClick={()=>pageHandler(index+1)}>{index+1}</span>
            ))}
            <span onClick={() => pageHandler(
                 pageNumber< totalPages ? pageNumber+1 : pageNumber
                )}>▶</span>
           </div>
        <About/>
        </>
    )
    }

    export default AllCategoriesProducts