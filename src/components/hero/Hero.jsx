import React from 'react'
import './Hero.css'
import Image from 'next/image'
import hero from '@/image/hero.png'

function Hero() {
    return (
        <div>
            <div className="nav__bg">
                <div className="container">
                    <div className="hero">
                        <Image src={hero} />
                        <div className="hero__right">
                            <h5>HEAR IT. FEEL IT</h5>
                            <h2>MOVE WITH THE MUSIC</h2>
                            <div className="pric">
                                <h3>$ 435</h3>
                                <h4>$ 465</h4>
                            </div>
                            <button>BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero