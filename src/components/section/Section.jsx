import React from 'react'
import './Section.css'
import Image from 'next/image'
import section from '@/image/section.png'
import next from '@/image/next.png'


function Section() {
    return (
        <>
            <div className="container">
                <div className="section">
                    <Image className='sectimg' src={section} />
                    <div className="section__right">
                        <h2>Whatever you get in the box</h2>
                        <h4><Image src={next} />5A Charger</h4>
                        <h4><Image src={next} />Extra battery</h4>
                        <h4><Image src={next} />Sophisticated bag</h4>
                        <h4><Image src={next} />User manual guide</h4>
                    </div>
                </div>
                <div className="contact">
                    <h2>Subscribe</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                    <form className='contact__form'>
                        <input type="text" placeholder='Enter Your email address' />
                        <button type='button'>Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Section