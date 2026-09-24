import { Link } from "react-router-dom"
import "../Styles/Category.css"
const Category = () => {
return(
    <>
    <section className="text-xl font-extrabold category">
    <div className="category-head">
        <h1>Categories</h1>
    </div>
    <div className="category-tail">
        <div className="category-men"> 
        <Link to='/men' className='category-men-link collection-link'>
            <h2>Men</h2>
            {/* <img className='collection-img' src="/Images/home.men.collection.png" alt="Men Image" /> */}
            
            <div className="home-card relative w-60 h-60">
                <div className="card-content transition-transform duration-1000">
                    <div className="card-front absolute top-0 bottom-0 right-0 left-0">
                        <img src="\Images\home.men.front.collection.png" alt="" />
                    </div>
                    <div className="card-back absolute top-0 bottom-0 right-0 left-0">
                        <img src="\Images\home.men.collection.png" alt="" />
                    </div>
                </div>

            </div>

        </Link>    
        </div>
        <Link to='women' className="category-women collection-link"> 
            <h2 >Women</h2>
            {/* <img className='collection-img' src="/Images/home.women.collection.png" alt="Women Image" /> */}
        
              <div className="home-card relative w-60 h-60">
                <div className="card-content transition-transform duration-1000">
                    <div className="card-front absolute top-0 bottom-0 right-0 left-0">
                        <img src="\Images\home.women.front.collection.png" alt="" />
                    </div>
                    <div className="card-back absolute top-0 bottom-0 right-0 left-0">
                        <img src="\Images\home.women.collection.png" alt="" />
                    </div>
                </div>

            </div>
        
        </Link>

        <Link to='kids' className="category-kids collection-link">
            <h2>Kids</h2>
            {/* <img className='collection-img' src="/Images/home.kids.collection.png" alt="" /> */}

              <div className="home-card relative w-60 h-60">
                <div className="card-content transition-transform duration-1000">
                    <div className="card-front absolute top-0 bottom-0 right-0 left-0">
                        <img src="\Images\home.kids.front.collection.png" alt="" />
                    </div>
                    <div className="card-back absolute top-0 bottom-0 right-0 left-0">
                        <img src="\Images\home.kids.collection.png" alt="" />
                    </div>
                </div>

            </div>

        </Link>
        <Link to='accessories' className="category-accessories collection-link">
            <h2>Accessories</h2>
            {/* <img className='collection-img' src="/Images/home.accessories.collection.png" alt="" /> */}
             <div className="home-card relative w-60 h-60">
                <div className="card-content transition-transform duration-1000">
                    <div className="card-front absolute top-0 bottom-0 right-0 left-0">
                        <img src="\Images\home.accessories.front.collection.png" alt="" />
                    </div>
                    <div className="card-back absolute top-0 bottom-0 right-0 left-0">
                        <img src="\Images\home.accessories.collection.png" alt="" />
                    </div>
                </div>

            </div>
        </Link>
    </div>
    
    </section>
    </>
)
}

export default Category