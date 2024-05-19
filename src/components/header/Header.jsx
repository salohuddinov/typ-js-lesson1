import React from 'react'
import './Header.css'
import Image from 'next/image'
import logo from '@/image/logo.png'
import person from '@/image/person.png'
import search from '@/image/search.png'
import shop from '@/image/shop.png'
import menu from '@/image/menu.png'
import Link from 'next/link'

function Header() {
    return (
        <>
            <div className="container">
                <div className="header">
                    <Link href={"/"}><Image src={logo} /></Link>
                    <div className="nav__item">
                        <Link href={"/admin"}><button><Image src={person} /></button></Link>
                        <button><Image src={search} /></button>
                        <button><Image src={shop} /></button>
                    </div>
                    <Image src={menu} />
                </div>
            </div>
        </>
    )
}

export default Header