import { Link } from "react-router-dom"
import "../Styles/Category.css"
const Category = () => {
return(
    <>
    <section className="category">
    <div className="category-head">
        <h1>Categories</h1>
    </div>
    <div className="category-tail">
        <div className="category-men"> 
        <Link to='/men' className='category-men-link'>
            <h2>Men</h2>
            <img src="/Images/man-collection-img.jpg" alt="Men Image" />
        </Link>    
        </div>
        <Link to='women' className="category-women"> 
            <h2>Women</h2>
            <img src="/Images/women-collection-img.jpg" alt="Women Image" />
        </Link>
        <Link to='kids' className="category-kids">
            <h2>Kids</h2>
            <img src="/Images/kids-collection-img.webp" alt="" />
        </Link>
        <Link to='accessories' className="category-accessories">
            <h2>Accessories</h2>
            <img src="/Images/accessories-collection-img.webp" alt="" />
        </Link>
    </div>
    
    </section>
    </>
)
}

export default Category