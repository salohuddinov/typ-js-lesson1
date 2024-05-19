"use client"
import React, { memo, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import rasm from '@/image/rasm.png'
import rasm2 from '@/image/rasm2.png'
import rasm3 from '@/image/batare.png'
import rasm4 from '@/image/bloth.png'
import rasm5 from '@/image/micro.png'
import main from '@/image/main.png'




import './Main.css'

import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

function Main() {
    return (
        <>
            <div className="container">
                <h2 className='title'>Our Latest colour collection 2021</h2>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image src={rasm} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={rasm2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={rasm} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={rasm} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={rasm2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={rasm} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={rasm} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={rasm2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={rasm} />
                    </SwiperSlide>
                </Swiper>
                <div className="main">
                    <div className="main__left">
                        <h2 className='main__left__title'>Good headphones and loud music is all you need</h2>
                        <div className="main__card">
                            <Image src={rasm3} />
                            <div className="card__right">
                                <h2>Battery</h2>
                                <h3>Battery 6.2V-AAC codec</h3>
                                <button>Lern More</button>                            </div>
                        </div>
                        <div className="main__card">
                            <Image src={rasm4} />
                            <div className="card__right">
                                <h2>Bluetooth</h2>
                                <h3>Battery 6.2V-AAC codec</h3>
                                <button>Lern More</button>                            </div>
                        </div>
                        <div className="main__card">
                            <Image src={rasm5} />
                            <div className="card__right">
                                <h2>Microphone</h2>
                                <h3>Battery 6.2V-AAC codec</h3>
                                <button>Lern More</button>
                            </div>
                        </div>
                    </div>
                    <Image src={main} />
                </div>
            </div>
        </>
    )
}

export default memo(Main)