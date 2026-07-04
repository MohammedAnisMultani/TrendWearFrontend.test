import About from "../Components/About"
import Category from "../Components/Category"
// import Filter from "../Components/Filter"
import Navbar from "../Components/Navbar"
import Slider from "../Components/Slider"

const Home = () => {


return(
    <>
    <Navbar/>
    <div>  
        <Slider/>
    </div>
    <Category/>
    <About/>
    </>
)
}

export default Home 