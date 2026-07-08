import React from 'react'
import '../Styles/Hero.css'
const Hero = () => {
  return (
    <div className='hero-outer-container'>
        <div className='hero-left'>
            <img className='hero-img' src="./Images/trendzwear.banner.png" alt="" />
        </div>
        <div className='hero-right'>
            <img className='hero-logo' src="./Images/trendzWear-blacktheme1.png" alt="" />
            <p>
                Trendzwear is the heartbeat of modern fashion — a brand that blends inspired artistry with everyday wear to create looks that are both playful and powerful. Every piece is designed to spark confidence, turning ordinary outfits into extraordinary statements. From chic women’s styles to bold men’s essentials and fun kidswear, Trendzwear celebrates individuality with a cartoonic aesthetic that feels fresh, vibrant, and unforgettable. It’s not just clothing — it’s a lifestyle, a vibe, and a trend you can wear.
            </p>
        </div>
    </div>
  )
}

export default Hero