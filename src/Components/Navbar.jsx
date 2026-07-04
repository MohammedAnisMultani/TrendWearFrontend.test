import { useEffect, useState } from 'react'
import '../Styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const[filterEnable, setFilterEnable] = useState(false);
    const navigate = useNavigate() 

    const changeCapture = () => {
    setFilterEnable(true);
    
 }

 useEffect(()=>{
    if(filterEnable){
        navigate('/FilterAllProducts')
    }
 },[filterEnable])


return(
    <>
    <section id="nav-container-main">
        <div id="nav-left-logo">
            <img src="public/Images/TrendzWear1.png" alt="" />
        </div>
        <div id="nav-center-search">
            <input onClick={changeCapture} type="text" placeholder='search...'/>
            <button>search</button>
        </div>
        <div id="nav-right-links">
            <p>Home</p>
            <button onClick={()=>{navigate('/Cart')}}>Cart</button>
            <p>checkout</p>
            <button onClick={()=>navigate('/Register')}>Signup</button>
        </div>
    </section>
    </>
)
}

export default Navbar 