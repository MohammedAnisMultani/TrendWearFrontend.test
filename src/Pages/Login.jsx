import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../Styles/Login.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

    const [usernameOrEmail, setUsernameOrEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

const handleLogin = async(e) =>{
    e.preventDefault()

    try {
        let res = await axios.post("https://trend-wear-test-z9so.vercel.app/login-form", {usernameOrEmail, password}, {withCredentials : true})
        console.log(res.data)
        navigate('/')
        toast.success("Login successfully")
    } catch (error) {
        console.log(error, "error")
    }
}

    return(
<>
<div className='login-outer-container'>
    <h1 className='login-heading'>Login</h1>
    <div className='login-mid-container'> 
    <div className='login-img-container'><img className='login-img' src="./Images/login.png" alt="" /></div>
    <form onSubmit={handleLogin}>
       <span className='login-label'>
         <label htmlFor="usernameOrEmail">Username or Email</label>
        <input value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} type="text" name="usernameOrEmail" placeholder="Enter your username or Email" />
       </span>
      <span className='login-label'>
          <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Enter your password" />
      </span>
        <span className='login-btn'><button type="submit">Login</button></span>
        <div className='redirectToRegister'>
            <p>Don't have an Account? click here to <Link to='/Register'>SignUp</Link></p>
        </div>
    </form>

</div></div>
</>
    )
}

export default Login