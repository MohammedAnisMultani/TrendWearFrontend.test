import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../Styles/Login.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

    const [usernameOrEmail, setUsernameOrEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()

const handleLogin = async(e) =>{
    e.preventDefault()
    setDisabled(true)

    try {
        let res = await axios.post("https://trend-wear-test-z9so.vercel.app/login-form", {usernameOrEmail, password}, {withCredentials : true})
        console.log(res.data)
        navigate('/')
        toast.success("Login successfully")
    } catch (error) {
        console.log(error, "error")
        toast.error("Login failed")
    }
    finally{
        setDisabled(false)
    }
}



    return(
<>
{/* <div className='login-outer-container'>
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
        <span className='login-btn'><button  disabled={disabled} type="submit">Login</button></span>
        <div className='redirectToRegister'>
            <p>Don't have an Account? click here to <Link to='/Register'>SignUp</Link></p>
        </div>
    </form>

</div>
</div> */}

{/* ----------- */}

{/* Trendwear */}

<div className='login-outer-container'>
    <h1 className='bg-green-800 text-green-100 md:w-full h-15 text-center flex items-center justify-center text-3xl !font-extrabold w-full !pr-0 !mr-0'>Login</h1>
    <div className='md:flex md:flex-row w-fit  items-center gap-4 bg-gray-300 p-2 rounded-2xl sm:flex flex-col !items-center'> 
    <div className='login-img-container !flex justify-center'><img className='login-img md:rounded-2xl rounded-t-2xl' src="./Images/login.png" alt="" /></div>
    <form onSubmit={handleLogin} className='login-form rounded-b-xl md:rounded-xl !bg-amber-50 !text-green-800 shadow-2xl !border-none !w-75'  >
       <span className='login-label'>
         <label htmlFor="usernameOrEmail">Username or Email</label>
        <input className='border-2 border-gray-300 rounded-md pl-2 !text-sm' value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} type="text" name="usernameOrEmail" placeholder="Enter your username or Email" />
       </span>
      <span className='login-label'>
          <label htmlFor="password">Password</label>
        <input className='border-2 border-gray-300 rounded-md pl-2 !text-sm'  value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Enter your password" />
      </span>
        <span className='text-center'><button  disabled={disabled} className='!bg-green-900 !text-green-100 w-full h-8 rounded-md font-bold' type="submit">Login</button></span>
        <div className='redirectToRegister'>
            <p className='text-sm'>Don't have an Account? click here to <Link to='/Register' className='bg-gray-200 font-bold text-xs p-1 rounded-md'>SignUp</Link></p>
        </div>
    </form>

</div>
</div>
</>
    )
}

export default Login