import React from 'react'
import Logo from '../../assets/shared/logo.svg'

export const Navbar = () => {
  return (
    <header className='w-screen fixed flex'>
        <img src={Logo} alt=""/>
        <div className="line"></div>
        <nav className="flex">
        <a href="/">00 HOME</a><a href="/destinatation">01 DESTINATATION</a><a href="/crew">02 CREW</a><a href="/technology">03 TECHNOLOGY</a>
        </nav>
    </header>
  )
}
