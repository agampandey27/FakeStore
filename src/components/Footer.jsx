import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center mb-0 py-4'>
      <h1 className='text-lg '>Made By ={'>'} <a target='_blank' href="https://www.linkedin.com/in/agampandeyy/" className='text-2xl font-semibold text-blue-500 hover:underline hover:text-blue-400'>Agam Pandey</a></h1>

      <div className='flex gap-4'>
      <a
          href="https://github.com/agampandey27"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/agampandeyy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 text-3xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer
