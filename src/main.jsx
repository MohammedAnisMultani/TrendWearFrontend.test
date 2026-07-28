import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import About from './Components/About.jsx'
import Category from './Components/Category.jsx'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import 'antd/dist/reset.css'; 

createRoot(document.getElementById('root')).render(
 <>
 <App />
 <ToastContainer/>
 </>

)
