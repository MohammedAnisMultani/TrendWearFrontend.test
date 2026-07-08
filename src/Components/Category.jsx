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
        <Link to='/men' className='category-men-link collection-link'>
            <h2>Men</h2>
            <img className='collection-img' src="/Images/home.men.collection.png" alt="Men Image" />
        </Link>    
        </div>
        <Link to='women' className="category-women collection-link"> 
            <h2>Women</h2>
            <img className='collection-img' src="/Images/home.women.collection.png" alt="Women Image" />
        </Link>
        <Link to='kids' className="category-kids collection-link">
            <h2>Kids</h2>
            <img className='collection-img' src="/Images/home.kids.collection.png" alt="" />
        </Link>
        <Link to='accessories' className="category-accessories collection-link">
            <h2>Accessories</h2>
            <img className='collection-img' src="/Images/home.accessories.collection.png" alt="" />
        </Link>
    </div>
    
    </section>
    </>
)
}

export default Category