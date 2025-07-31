import React from 'react'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <header className='bg-red-300'>
        <nav>
            <a href="#" className='flex w-15 h-15 bg-zinc-100 rounded-full'>
                <img src={Logo} className='w-full h-full object-contain' />
            </a>
        </nav>
    </header>
  )
}

export default Navbar
