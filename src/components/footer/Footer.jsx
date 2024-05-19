import React from 'react'
import './Footer.css'
import Image from 'next/image'
import rasm from '@/image/in.png'
import rasm2 from '@/image/tw.png'
import rasm3 from '@/image/fb.png'
import logo from '@/image/logo.png'


function Footer() {
    return (
        <>
            <div className="container">
                <div className="footer">
                    <Image src={logo} />
                    <div className="footer__itm">
                        <h3>Home</h3>
                        <h3>About</h3>
                        <h3>Product</h3>
                    </div>
                    <div className="fo__icons">
                        <button><Image src={rasm} /></button>
                        <button><Image src={rasm2} /></button>
                        <button><Image src={rasm3} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer