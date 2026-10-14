import { Link } from 'react-router-dom'
import '../Styles/About.css'

const About = () => {
    return(
        <>
            <footer className='About'>

            {/* tailwindcss  */}
           <section className='!flex !flex-col md:!flex-row !justify-between gap-8 md:gap-0 text-green-50 p-6 md:p-10 bg-green-950'>
             <section className=''>
                <div>
                    <img className='w-48 md:w-90 pb-5 pt-5' src="\Images\trendzwear-logo-updated.png" alt="" />
                </div>
                <div>
                     <p className='w-full md:w-100 text-justify text-sm'>TrendWear is your go‑to destination for stylish clothing that fits every lifestyle. We bring together the latest fashion trends for men, women, and kids, offering a wide range of outfits from casual essentials to statement pieces
</p>
                </div>
                <div>

                </div>

            </section>
            <section className='w-full md:w-60'>
                <div className='flex items-center gap-1 mb-5'>
                    <span className="material-symbols-outlined text-yellow-300">apparel</span>
                    <p className='!m-0'>Shop by Categories</p>
                </div>
                <Link to='men' className=''>
                    <div className='flex justify-between rounded-sm items-center hover:!bg-yellow-300 hover:text-black duration-100'>
                    <p className='text-sm !mb-0 p-1'>Men</p>
                   <span className="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
                </Link>
               <Link to='women'>
                <div className='flex justify-between items-center rounded-sm hover:!bg-yellow-300 hover:text-black duration-100'>
                    <p className='text-sm !mb-0 p-1'>Women</p>
                   <span className="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
               </Link>
                <Link to='kids'>
                <div className='flex justify-between items-center rounded-sm hover:!bg-yellow-300 hover:text-black duration-100'>
                    <p className='text-sm !mb-0 p-1'>Kids</p>
                   <span className="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
                </Link>
                <Link to='accessories'>
                <div className='flex justify-between items-center rounded-sm hover:!bg-yellow-300 hover:text-black duration-100'>
                    <p className='text-sm !mb-0 p-1'>Accessories</p>
                   <span className="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
                </Link>
            </section>

            {/* ------ */}
             <section className='w-full md:w-60'>
                <div className='flex items-center gap-1 mb-5'>
                  <span className="material-symbols-outlined text-yellow-300">shoppingmode</span>
                    <p className='!m-0'>Quick Links</p>
                </div>
                <Link to='/AboutUs'>
                 <div className='flex justify-between items-center rounded-sm hover:!bg-yellow-300 hover:text-black duration-100'>
                    <p className='text-sm !mb-0 p-1'>About Us</p>
                   <span className="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
               </Link>
               <Link to='/ContactUs'>
                 <div className='flex justify-between items-center rounded-sm hover:!bg-yellow-300 hover:text-black duration-100'>
                    <p className='text-sm !mb-0 p-1'>Contact Us</p>
                   <span className="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
               </Link>
               <Link to='/PrivacyPolicy'>
                  <div className='flex justify-between items-center rounded-sm hover:!bg-yellow-300 hover:text-black duration-100'>
                    <p className='text-sm !mb-0 p-1'>Privacy Policy</p>
                   <span className="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
                </Link>
                <Link to='/Register'>
                  <div className='flex justify-between items-center rounded-sm hover:!bg-yellow-300 hover:text-black duration-100'>
                    <p className='text-sm !mb-0 p-1'>Register</p>
                   <span className="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
                </Link>
                <Link to='/Login'>
                  <div className='flex justify-between items-center rounded-sm hover:!bg-yellow-300 hover:text-black duration-100'>
                    <p className='text-sm !mb-0 p-1'>Login</p>
                   <span className="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                </div>
                </Link>
            </section>

            <section className='w-full md:w-70 text-sm space-y-4'>
                <div className='flex gap-2 items-center justify-start md:justify-center pb-3'>
                    <span className="material-symbols-outlined text-yellow-300 !text-3xl ">headset_mic</span>
                    <div>
                        <p className='!mb-0'>Need Help?</p>
                        <p className='text-xs mb-0'>We're here to assist you</p>
                    </div>
                </div>

                <div className='flex items-center justify-between gap-2'>
                    <span className="material-symbols-outlined">call</span>
                    <p className='!mb-0'>+91 9636036XXXX</p>
                </div>
                <div className='flex items-center justify-between gap-2'>
                    <span className="material-symbols-outlined">mail</span>
                    <p className='!mb-0 break-all md:break-normal'>trendzwear.support@gmail.com</p>
                </div>
                <div className='flex items-center justify-between gap-2'>
                    <span className="material-symbols-outlined">location_on</span>
                    <p className='!mb-0'>Nagaur, Rajasthan, India</p>
                </div>
            </section>
           </section>


{/* tailwindcss  */}
            <section className='flex items-center justify-center p-2 bg-green-900 gap-1 text-green-50'>
                <span className="material-symbols-outlined !text-sm">copyright</span>
                <p className='text-xs !m-0'>2026 TrendzWear. All rights reserved</p>
            </section>
            </footer>
        </>
    )
}

export default About