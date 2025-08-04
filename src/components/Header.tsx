import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import profileimage from '../images/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='w-full p-4 bg-gray-400 fixed top-0 left-0 z-10'>
      <div className='flex justify-between items-center'>
        {/* Logo & Name */}
        <div className='flex items-center gap-2'>
          <img className='w-9 h-10 rounded-full ring-2 ring-green-300' src={profileimage} alt="logo" />
          <h1 className='text-2xl md:text-4xl text-[rgb(47,46,65)] font-bold italic uppercase'>
            Ashik Api <span className='text-purple-400'>.</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex justify-evenly items-center text-white font-semibold text-lg list-none gap-6 mr-4'>
          <li><a className='hover:border-b-2 border-purple-500 hover:text-purple-800' href="#home">Home</a></li>
          <li><a href="#aboutme">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skill">My Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="/Md.-Ashikur-Rahaman-Api_Frontend-Developer_CV-Resume.pdf" download>My Resume</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a className='px-4 py-2 bg-green-600 hover:bg-green-900 rounded-3xl uppercase animate-bounce duration-1000 inline-block' href="#contact">Hire Me</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden text-2xl text-white mr-2' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className='md:hidden flex flex-col bg-gray-600 mt-4 rounded-lg text-white font-semibold text-base list-none p-4 gap-3'>
          <li><a onClick={() => setMenuOpen(false)} href="#home">Home</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#aboutme">About Me</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#services">Services</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#skill">My Skills</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#experience">Experience</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#resume">My Resume</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#testimonials">Testimonials</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className='block text-center mt-2 px-4 py-2 bg-green-600 hover:bg-green-900 rounded-3xl uppercase'
              href="#contact"
            >
              Hire Me
            </a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header
