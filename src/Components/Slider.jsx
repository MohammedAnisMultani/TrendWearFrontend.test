import { useEffect, useState } from 'react'
import '../Styles/Slider.css'

const Slider = () => {

    const[currentIndex, setCurrentIndex] = useState(0)

    const sliderImageArray =[
        {url : "/Images/Man-poster-TrendWear.png"},
        {url : "/Images/Kids-poster-trendWear.png"},
        {url : '/Images/women-poster-trendWear.png'}
    ]

    const handlePrev = () => {
        setCurrentIndex((prev)=>
            prev  == 0 ? sliderImageArray.length -1 : prev-1
        )
    }

    const handleNext = () => {
        setCurrentIndex((prev) => 
            prev == sliderImageArray.length-1 ? 0 : prev + 1
        )
    }

    useEffect(()=>{
        const autoSlider = setInterval(()=>{
            handleNext()
        },5000)

        return () => clearInterval(autoSlider)
    },[])

    return(
        <>
        <h1 className='home-title'>
            <img className='home-title-image' src="public/Images/trendzWear-blacktheme1.png" alt="" />
        </h1>
        <div className='slider-outer-container'>
            <span onClick={()=>handlePrev()} className='slider-left-btn'>◀</span>
            <span className='slider-poster-img-container'> <img className='slider-poster-img' src={sliderImageArray[currentIndex].url}alt="Image not found" /></span>
            <span onClick={()=>handleNext()} className='slider-right-btn'>▶</span>
        </div>
        </>
    )
}

export default Slider