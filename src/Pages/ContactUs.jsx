import { useState } from 'react'
import '../Styles/ContactUs.css'
import axios from 'axios'

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        message : "" 
    })

    const handleRequest = async(e) => {
        e.preventDefault();
        console.log(formData) 

        try {
           let res = await axios.post('https://trend-wear-test-z9so.vercel.app/contactus',formData)
            console.log(res.data)
        } catch (error) {
            console.log(error, 'error')
        }

    }


    return(
        <>
        <section className='contactus-main-container'>
            <header className='contactus-heading'>
                <h1>Contact Us</h1>
            </header>
            <section className='contactus-form-section'>
                <form className='contactus-form'  onSubmit={handleRequest}>
                    <label htmlFor="name">Name</label>
                    <input onChange={(e)=>setFormData((prev)=>({...prev,name : e.target.value}))} value={formData.name} type="text" name='name' placeholder='Enter your name here' required/>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>setFormData((prev)=>({...prev, email:e.target.value}))} value={formData.email} type="email" name='email' placeholder='Please enter your Email here' required/>
                    <label htmlFor="message">Enter you Message</label>
                    <textarea onChange={(e)=>setFormData((prev)=>({...prev, message:e.target.value}))} value={formData.message} name="message" rows='5' placeholder='Enter your message here...' required></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </section>
        </section>
        </>
    )
}

export default ContactUs