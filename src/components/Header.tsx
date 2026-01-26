import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
// import profileimage from '../images/logo.png'
import logo from '../images/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openCV, setOpenCV] = useState(false);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About Me', link: '#aboutme' },
    { name: 'My Skills', link: '#skill' },
    // { name: 'My Resume', link: '' },
    // { name: 'Contact', link: '#contact' },
  ];
  const [hashurlColor, setHashUrlColor] = useState('');

  // const handleDownload = () => {
  //   alert("CV Downloaded successfully !");
  // }

  return (
    <div className='w-full lg:p-4 md:p-6 p-4 bg-slate-900 fixed top-0 z-10'>
      <div className='md:flex md:justify-evenly flex justify-between items-center '>
        {/* Logo & Name */}
        <div className='flex items-center lg:gap-3 md:gap-2 gap-3 md:mr-1'>
          <a href="#home">
            {/* <img className='lg:w-9 lg:h-10 md:w-6 md:h-6 w-9 h-10 rounded-full ring-2 ring-green-300' src="https://i.postimg.cc/zXKzKsyp/logo.png" alt="Ashik" /></a> */}
            <img className='lg:w-9 lg:h-10 md:w-6 md:h-6 w-9 h-10 rounded-full ring-2 ring-green-300' src={logo} alt="Ashik" /></a>
          <a href="#home">
            {/* <h1 className='text-xl xl:text-4xl lg:text-2xl md:text-lg sm:text-xl text-[rgb(0,213,190)] font-bold uppercase'>
            Ashik Api <span className=''>.</span>
          </h1> */}
            <h1 className="relative inline-block text-xl xl:text-4xl lg:text-2xl md:text-lg sm:text-xl text-[rgb(0,213,190)] font-bold uppercase">
              Ashik Api
              <span className="absolute -right-4 top-2/3 -translate-y-1/2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(0,213,190)] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgb(0,213,190)]"></span>
              </span>
            </h1>
          </a>
        </div>

        {/* Desktop Menu */}
        <div>
          <ul className='hidden md:flex justify-evenly items-center text-slate-50 font-semibold xl:text-base text-sm list-none xl:gap-10 lg:gap-4 md:gap-2.5 xl:mr-4'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}
                  onClick={() => setHashUrlColor(item.link)}
                  className={hashurlColor === item.link ? 'text-[rgb(0,150,137)] font-bold border-b-2 border-b-[rgb(0,150,137)]' : 'hover:text-teal-400 hover:font-semibold transition'}
                >{item.name}</a>
              </li>
            ))}
            <li>
              <button
                onClick={() => setOpenCV(true)}
                className="transition-colors duration-300 hover:text-[rgb(0,150,137)]"
              >
                My Resume
              </button>
            </li>
            {/* Contact */}
            <li>
              <a
                href="#contact"
                onClick={() => setHashUrlColor('#contact')}
                className={
                  hashurlColor === '#contact'
                    ? 'text-[rgb(0,150,137)] font-bold border-b-2 border-b-[rgb(0,150,137)]'
                    : 'hover:text-teal-400 transition'
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className='hidden md:flex justify-evenly items-center text-slate-50 font-semibold lg:text-lg md:text-sm text-lg list-none gap-6 lg:mr-4 md:ml-2'>
            <li>
              <a className='lg:px-4 lg:py-2 md:px-2 md:py-1 px-4 py-2 bg-[rgb(0,150,137)] hover:bg-teal-700 rounded-3xl uppercase md:animate-bounce duration-1000 inline-block' href="#contact">Hire Me</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden text-2xl text-white' onClick={() => setMenuOpen(!menuOpen)}>
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
          {/* <li onClick={handleDownload}><a href="/Md.-Ashikur-Rahaman-Api-Resume2.pdf" download>My Resume</a></li> */}
          {/* <li><a onClick={() => setMenuOpen(false)} href="#testimonials">Testimonials</a></li> */}
          <li><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className='block text-center mt-2 px-4 py-2 bg-[rgb(0,150,137)] hover:bg-teal-700 rounded-3xl uppercase'
              href="#contact"
            >
              Hire Me
            </a>
          </li>
        </ul>
      )}

      {openCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

          <div className="relative w-[90%] md:w-[70%] h-[80%] md:h-[90%] bg-white rounded-lg shadow-lg">

            {/* Close button */}
            <button
              onClick={() => setOpenCV(false)}
              className="absolute top-0 right-0 text-xl font-bold text-[rgb(0,150,137)] hover:text-red-500"
            >
              <FaTimes />
            </button>

            {/* Iframe */}
            <iframe
              src="https://drive.google.com/file/d/1Qdm-vaAvX5EZVeXZEPUovpN272muLJd9/preview"
              className="w-full h-full rounded-lg"
              allow="autoplay"
            ></iframe>

          </div>
        </div>
      )}

    </div>
  )
}

export default Header
