import { Link } from 'react-router-dom'
import '../Styles/About.css'

const About = () => {
    return(
        <>
            <footer className='About'>
                {/* <section className="upper-about">
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
            </section> */}

            {/* <section className="lower-about">
                <p>2026 Copyright</p>
                <p>TrendzWear.com</p>
            </section> */}
            {/* ------------------------ */}

            {/* tailwindcss  */}
           <section className='!flex !flex-row !justify-between text-green-50 p-10 bg-green-950'>
             <section className=''>
                <div>
                    <img className='w-90 pb-5 pt-5' src="\Images\trendzwear-logo-updated.png" alt="" />
                </div>
                <div>
                     <p className='w-100 text-justify text-sm'>TrendWear is your go‑to destination for stylish clothing that fits every lifestyle. We bring together the latest fashion trends for men, women, and kids, offering a wide range of outfits from casual essentials to statement pieces
</p>
                </div>
                <div>

                </div>

            </section>
            <section className='w-60'>
                <div className='flex items-center gap-1 mb-5'>
                    <span class="material-symbols-outlined text-yellow-300">apparel</span>
                    <p className='!m-0'>Shop by Categories</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm'>Men</p>
                   <span class="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm'>Women</p>
                   <span class="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm'>Kids</p>
                   <span class="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm'>Accessories</p>
                   <span class="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
            </section>

            {/* ------ */}
             <section className='w-60'>
                <div className='flex items-center gap-1 mb-5'>
                  <span class="material-symbols-outlined text-yellow-300">shoppingmode</span>
                    <p className='!m-0'>Quick Links</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm'>About Us</p>
                   <span class="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm'>Contact Us</p>
                   <span class="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm'>Privacy Policy</p>
                   <span class="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm'>Register</p>
                   <span class="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm'>Login</p>
                   <span class="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
            </section>

            <section className='w-70 text-sm space-y-4'>
                <div className='flex gap-2  items-center justify-center pb-3'>
                    <span class="material-symbols-outlined text-yellow-300 !text-3xl ">headset_mic</span>
                    <div>
                        <p className='!mb-0'>Need Help?</p>
                        <p className='text-xs mb-0'>We're here to assist you</p>
                    </div>
                </div>

                <div className='flex items-center justify-between gap-2'>
                    <span class="material-symbols-outlined">call</span>
                    <p className='!mb-0'>+91 9636036XXXX</p>
                </div>
                <div className='flex items-center justify-between gap-2'>
                    <span class="material-symbols-outlined">mail</span>
                    <p className='!mb-0'>trendzwear.support@gmail.com</p>
                </div>
                <div className='flex items-center justify-between gap-2'>
                    <span class="material-symbols-outlined">location_on</span>
                    <p className='!mb-0'>Nagaur, Rajasthan, India</p>
                </div>
            </section>
           </section>
        

{/* tailwindcss  */}
            <section className='flex items-center justify-center p-2 bg-green-900 gap-1 text-green-50'>
                <span class="material-symbols-outlined !text-sm">copyright</span>
                <p className='text-xs !m-0'>2026 TrendzWear. All rights reserved</p>
            </section>
            </footer>
        </>
    )
}

export default About 