import { useEffect, useState } from 'react'
import '../Styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    // const[filterEnable, setFilterEnable] = useState(false);
    const navigate = useNavigate() 

//     const changeCapture = () => {
//     setFilterEnable(true);
    
//  }

//  function isLogged(){
//     console.log(document.cookie)
//     navigate('/login')
//  }

//  useEffect(()=>{
//     if(filterEnable){
//         navigate('/FilterAllProducts')
//     }
//  },[filterEnable])


return(
    <>
    <section id="nav-container-main">
        <div id="nav-left-logo">
            <img src="/Images/trendzWear1.png" alt="" />
        </div>
        <div id="nav-center-search">
            <input onClick={()=>navigate('/filterAllProducts')} type="text" placeholder='search...'/>
            <button>search</button>
        </div>
        <div id="nav-right-links">
            <p>Home</p>
            
            <p>checkout</p>
            <button className='nav-cart-btn' onClick={()=>navigate('/Cart')}>Cart</button>
        </div>
    </section>
    </>
)
}

export default Navbar 