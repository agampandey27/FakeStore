// import React from 'react'
// import {Link} from 'react-router-dom'
// import { FaShoppingCart } from 'react-icons/fa'

// const Navbar = () => {
//   return (
//       <nav className='sticky top-0 z-50 flex items-center justify-between px-7 py-4 bg-[#111]'>
        
//         <Link to='/' className='text-3xl font-bold flex'><img className='h-8 m-1' src="https://fakestoreapi.com/icons/logo.png" alt="" />FakeStore</Link>
            
//         <div className='flex gap-8'>
//             <Link to='/' className='text-lg transform transition duration-300 hover:scale-110 hover:text-blue-400'>Home</Link>
//             <Link to='/my-cart' className='text-lg transform transition duration-300 hover:scale-110 hover:text-blue-400 flex items-center justify-center gap-1'>My Cart <FaShoppingCart/></Link>
//             <Link to='/about' className='text-lg transform transition duration-300 hover:scale-110 hover:text-blue-400'>About</Link>
//             <Link to='/contact' className='text-lg transform transition duration-300 hover:scale-110 hover:text-blue-400'>Contact</Link>
//         </div>
//       </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#111] px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center text-white">
          <img className="h-8 mr-2" src="https://fakestoreapi.com/icons/logo.png" alt="logo" />
          FakeStore
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-white">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/my-cart" className="hover:text-blue-400 transition flex items-center gap-1">
            My Cart <FaShoppingCart />
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white text-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Links Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-4 text-white px-2">
          <Link to="/" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/my-cart" className="hover:text-blue-400 transition flex items-center gap-1" onClick={() => setIsOpen(false)}>
            My Cart <FaShoppingCart />
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
