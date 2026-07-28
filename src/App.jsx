
import './App.css'
import Home from './Pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MenPage from './Pages/AllCategoriesProducts'
// import AllCategoriesProducts from './Pages/AllCategoriesProducts'
import FilterAllProducts from './Components/FilterAllProducts'
import { CartProvider } from './Components/CartContext'
import CartPage from './Pages/CartPage'
import Register from './Pages/Register'
import Login from './Pages/Login'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import { lazy, Suspense } from 'react'
import { Spin } from 'antd'
const AllCategoriesProductslazy = lazy(()=> import('./Pages/AllCategoriesProducts.jsx'))

function App() {
  

  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path = '/:category' element={<Suspense fallback= {<Spin/>}><AllCategoriesProductslazy/></Suspense>}/>
        <Route path='/Cart' element={<CartPage/>}/>
        <Route path='/filterAllProducts' element={<FilterAllProducts/>}/>
        <Route path='PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>

    </>
    
  )
}

export default App
