import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className='sticky top-0 z-50 flex items-center justify-between px-7 py-4 bg-[#111]'>
        
        <Link to='/' className='text-3xl font-bold flex'><img className='h-8 m-1' src="https://fakestoreapi.com/icons/logo.png" alt="" />FakeStore</Link>
            
        <div className='flex gap-8'>
            <Link to='/' className='text-lg transform transition duration-300 hover:scale-110 hover:text-blue-400'>Home</Link>
            <Link to='/my-cart' className='text-lg transform transition duration-300 hover:scale-110 hover:text-blue-400'>My Cart</Link>
            <Link to='/about' className='text-lg transform transition duration-300 hover:scale-110 hover:text-blue-400'>About</Link>
            <Link to='/contact' className='text-lg transform transition duration-300 hover:scale-110 hover:text-blue-400'>Contact</Link>
        </div>
      </nav>
  )
}

export default Navbar
