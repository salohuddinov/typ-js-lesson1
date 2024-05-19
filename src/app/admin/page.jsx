import React from 'react'
import './Admin.css'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import logo from '@/image/logo1.png'
import rasm1 from '@/image/rasm-1.png'
import rasm2 from '@/image/rasm-2.png'
import rasm3 from '@/image/rasm-3.png'
import rasm4 from '@/image/rasm-4.png'
import rasm5 from '@/image/rasm-5.png'
import rasm6 from '@/image/rasm-6.png'
import rasm7 from '@/image/Vectorr.png'
import rasm8 from '@/image/Vector.png'
import rasm9 from '@/image/Vector1.png'
import rasm10 from '@/image/photo.png'
import rasm11 from '@/image/Dots.png'
import img1 from '@/image/Ellipse1.png'
import img2 from '@/image/Ellipse2.png'
import img3 from '@/image/Ellipse3.png'
import img4 from '@/image/Ellipse4.png'
import img5 from '@/image/Ellipse5.png'
import img6 from '@/image/Ellipse6.png'
import img7 from '@/image/Ellipse7.png'
import img8 from '@/image/Ellipse8.png'
import img9 from '@/image/Ellipse9.png'
import img10 from '@/image/Ellipse10.png'
import Link from 'next/link'


const Admin = () => {
    let isLogin = "kjdjs"
    if (!isLogin) {
        redirect("/")
    }
    return (
        <>
            <div className="admin">
                <div className="admin__saidbar">
                    <div className="saidbar__top">
                        <Link href={'/'} className="logo">
                            <Image src={logo} />
                            <h4>Dashboard</h4>
                        </Link>
                        <div className="saidbar__item">
                            <Image src={rasm1} />
                            <h3>Products</h3>
                        </div>
                        <div className="saidbar__item">
                            <Image src={rasm2} />
                            <h3>Users</h3>
                        </div>
                        <div className="saidbar__item">
                            <Image src={rasm3} />
                            <h3>Posts</h3>
                        </div>
                        <div className="saidbar__item">
                            <Image src={rasm4} />
                            <h3>Contacts</h3>
                        </div>
                        <div className="saidbar__item">
                            <Image src={rasm5} />
                            <h3>Agents</h3>
                        </div>
                        <div className="saidbar__item">
                            <Image src={rasm6} />
                            <h3>Articles</h3>
                        </div>
                    </div>
                    <div className="saidbar__botm">
                        <div className="saidbar__item">
                            <Image src={rasm7} />
                            <h3>Change mode</h3>
                        </div>
                        <Link href={'/'} className="saidbar__item">
                            <Image src={rasm8} />
                            <h3>Logout</h3>
                        </Link>
                    </div>
                </div>
                <div className="admin__content">
                    <div className="cont__header">
                        <Image src={rasm9} />
                        <div className="hedr__righ">
                            <h4>Jones Ferdinand</h4>
                            <Image src={rasm10} />
                        </div>
                    </div>
                    <div className="hed">
                        <h2>Overview</h2>
                        <div className="hed__right">
                            <Image src={rasm11} />
                            <button>Add</button>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="seshon">
                            <h4>Owner</h4>
                            <h4>End date</h4>
                            <h4>Profits</h4>
                            <h4>Losses</h4>
                            <h4>Phone</h4>
                        </div>
                        <div className="cont__card">
                            <div className="imgg">
                                <Image src={img1} />
                                <h4>Savannah Nguyen</h4>
                            </div>
                            <h5>1/15/12</h5>
                            <h4 className='img__h4'>$328.85</h4>
                            <h6>$779.58</h6>
                            <h2>(603) 555-0123</h2>
                        </div>
                        <div className="cardd">
                            <div className="imgg">
                                <Image src={img2} />
                                <h4>Jenny Wilson</h4>
                            </div>
                            <h5>1/15/12</h5>
                            <h4 className='img__h4'>$328.85</h4>
                            <h6>$779.58</h6>
                            <h2>(603) 555-0123</h2>
                        </div>
                        <div className="cont__card">
                            <div className="imgg">
                                <Image src={img3} />
                                <h4>Annette Black</h4>
                            </div>
                            <h5>1/15/12</h5>
                            <h4 className='img__h4'>$328.85</h4>
                            <h6>$779.58</h6>
                            <h2>(603) 555-0123</h2>
                        </div>
                        <div className="cardd">
                            <div className="imgg">
                                <Image src={img4} />
                                <h4>Kathryn Murphy</h4>
                            </div>
                            <h5>1/15/12</h5>
                            <h4 className='img__h4'>$328.85</h4>
                            <h6>$779.58</h6>
                            <h2>(603) 555-0123</h2>
                        </div>
                        <div className="cont__card">
                            <div className="imgg">
                                <Image src={img5} />
                                <h4>Cameron Williamson</h4>
                            </div>
                            <h5>1/15/12</h5>
                            <h4 className='img__h4'>$328.85</h4>
                            <h6>$779.58</h6>
                            <h2>(603) 555-0123</h2>
                        </div>
                        <div className="cardd">
                            <div className="imgg">
                                <Image src={img6} />
                                <h4>Kristin Watson</h4>
                            </div>
                            <h5>1/15/12</h5>
                            <h4 className='img__h4'>$328.85</h4>
                            <h6>$779.58</h6>
                            <h2>(603) 555-0123</h2>
                        </div>
                        <div className="cont__card">
                            <div className="imgg">
                                <Image src={img7} />
                                <h4>Eleanor Pena</h4>
                            </div>
                            <h5>1/15/12</h5>
                            <h4 className='img__h4'>$328.85</h4>
                            <h6>$779.58</h6>
                            <h2>(603) 555-0123</h2>
                        </div>
                        <div className="cardd">
                            <div className="imgg">
                                <Image src={img8} />
                                <h4>Guy Hawkins</h4>
                            </div>
                            <h5>1/15/12</h5>
                            <h4 className='img__h4'>$328.85</h4>
                            <h6>$779.58</h6>
                            <h2>(603) 555-0123</h2>
                        </div>
                        <div className="cont__card">
                            <div className="imgg">
                                <Image src={img9} />
                                <h4>Brooklyn Simmons</h4>
                            </div>
                            <h5>1/15/12</h5>
                            <h4 className='img__h4'>$328.85</h4>
                            <h6>$779.58</h6>
                            <h2>(603) 555-0123</h2>
                        </div>
                        <div className="cardd">
                            <div className="imgg">
                                <Image src={img10} />
                                <h4>Robert Fox</h4>
                            </div>
                            <h5>1/15/12</h5>
                            <h4 className='img__h4'>$328.85</h4>
                            <h6>$779.58</h6>
                            <h2>(603) 555-0123</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin