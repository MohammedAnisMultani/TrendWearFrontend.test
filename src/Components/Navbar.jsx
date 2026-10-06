import { useEffect, useState } from 'react'
import '../Styles/Navbar.css'
import { Link, useNavigate } from 'react-router-dom';

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
    <section id="nav-container-main" className='!bg-green-900' >
        <div id="nav-left-logo">
            <img className='pl-4 w-55 !h-10 ' src="/Images/trendzwear-logo-updated.png" alt="" />
        </div>
        <div className='' id="nav-center-search">
            <input className='bg-white p-4' onClick={()=>navigate('/filterAllProducts')} type="text" placeholder='search...'/>
            <button className='flex items-center bg-white p-4 pl-3 pr-16 rounded-r-full font-bold hover:bg-yellow-500 hover:!text-white hover:cursor-pointer transition duration-300'>search</button>
        </div>
        
        
        <div id="nav-right-links" className='flex pt-1 items-center justify-center space-x-5 pr-5 text-white'>
            
    
            <Link to='/'>
            <div className='flex flex-col items-center relative group hover:cursor-pointer'> 
                <span className="material-symbols-outlined hover:text-yellow-300">home</span>
                <p className='text-xs'>Home</p>
                <span className='absolute left-0 bottom-2 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300' ></span>
            </div>
            </Link>
            
            <a href="#Category">
                <div className='flex flex-col items-center relative group hover:cursor-pointer'>
                <span className="material-symbols-outlined hover:text-yellow-300">shopping_bag_speed</span>
                <p className='text-xs'>shop</p>
                 <span className='absolute left-0 bottom-2 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300' ></span>
            </div> 
            </a>

            {/* <button className='nav-cart-btn' onClick={()=>navigate('/Cart')}>Cart</button> */}
            <div className='flex flex-col items-center relative group hover:cursor-pointer'>
                <span  onClick={()=>navigate('/Cart')} className="material-symbols-outlined hover:text-yellow-300">shopping_cart</span>
                <p className='text-xs'>Cart</p>
                 <span className='absolute left-0 bottom-2 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300' ></span>
            </div>

            <div className='flex flex-col items-center relative group hover:cursor-pointer'>
                <span className="material-symbols-outlined hover:text-yellow-300">account_circle</span>
                <p className='text-xs'>account</p>
                <span className='absolute left-0 bottom-2 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300' ></span>
            </div>
            
        </div>
    </section>
    </>
)
}

export default Navbar 