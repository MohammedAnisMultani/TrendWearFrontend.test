import { Link } from 'react-router-dom'
import '../Styles/About.css'

const About = () => {
    return(
        <>
            <footer className='About'>
                <section className="upper-about">
                <div className='auleft'>
                    <div className="aud1">
                    <h2><img className='about-image' src="public/Images/trendzWear1.png" alt="" /></h2>
                    <p>TrendWear is your go‑to destination for stylish clothing that fits every lifestyle. We bring together the latest fashion trends for men, women, and kids, offering a wide range of outfits from casual essentials to statement pieces
</p>
                </div>
                </div>
                <div className='auright'> 
                <div className="aud2">
                    <h2>Links</h2>
                    <Link className='about-aboutUs' to='/AboutUs'><p>About Us</p></Link>
                    <Link className='about-contactUs' to='/ContactUs'><p>Contact Us</p></Link>
                    <p>Delete account</p>
                </div>
                <div className="aud3">
                    <h2>Links</h2>
                    <Link className='about-pp' to='/PrivacyPolicy'><p>Privacy policy</p></Link>
                    <Link className='about-register'  to='/Register'><p>Register</p></Link>
                    <Link className='about-login' to='/Login'><p>Login</p></Link>
                    <p>Admin-panel</p>
                </div>
                </div>
            </section>

            <section className="lower-about">
                <p>2026 Copyright</p>
                <p>TrendzWear.com</p>
            </section>
            </footer>
        </>
    )
}

export default About 