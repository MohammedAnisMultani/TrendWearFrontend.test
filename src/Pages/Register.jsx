import { Link, useNavigate } from "react-router-dom";
import "../Styles/Register.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {

  const [formData, setFormData] = useState({
    name : '',
    username : '',
    email : '',
    password : '',
    cpassword : ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()

    setFormData({
      ...formData, [e.target.name] : e.target.value
    })
  }

  const handleRegister = async(e) => {
    e.preventDefault()
    try {
      let res = await axios.post("https://trend-wear-test-z9so.vercel.app/register-form",
        formData,
        {withCredentials: true}
      )

      console.log(res.data)
      navigate('/Login')
      toast.success("Registered successfully")
    } catch (error) {
      console.log(error, "error")
    }
  }
  return (
    <>
      <div className="register-outer-container">
        <h1 className="!bg-green-800 !text-green-100 !font-bold text-xl register-heading ">Register</h1>
        <div className="!bg-gray-300 rounded-xl register-mid-container">
        <div><img className="rounded-xl register-img" src="./Images/register1.png" alt="" /></div>
        <form onSubmit={handleRegister} className="shadow-2xl !border-none !bg-yellow-50 text-green-800 register-form">
          <span>
            <label className="register-label" htmlFor="name">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              name="name"
              required
            />
          </span>
          <span > 
            <label className="register-label" htmlFor="username">Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={handleChange}
              name="username"
              placeholder="Enter your username"
              required
            />
          </span>
          <span>
           <label className="register-label" htmlFor="email">Email</label>
           <input type="email" value={formData.email} onChange={handleChange} name="email" placeholder="Enter your email" required/>
          </span>
          <span>
            <label className="register-label" htmlFor="password">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              placeholder="Enter your password"
              required
            />
          </span>
          <span>
            <label className="register-label" htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              value={formData.cpassword}
              onChange={handleChange}
              name="cpassword"
              placeholder="Enter password to confirm"
            />
          </span>
          <div className="register-btn-container">
            <button className="!bg-green-800 hover:cursor-pointer register-btn" type="submit">Sign up</button>
          </div>
          <div className="redirectToLogin">
            <p className="text-sm" >Already have an Account? click here to <Link className="font-bold bg-gray-200 p-1.5 rounded-sm" to='/Login'>login</Link></p>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default Register;
