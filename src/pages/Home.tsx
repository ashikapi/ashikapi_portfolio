import { Typewriter } from 'react-simple-typewriter'
import profileashik from '../images/Ashik Api.jpg'
import 'animate.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiHtml5 } from "react-icons/si";


const Home = () => {
    return (
        <div className='bg-[rgb(15,23,43)] -mt-2 lg:pt-24 lg:pb-14 md:pt-20 md:pb-10 sm:pt-28 sm:pb-10 pt-4 pb-10 pl-2 pr-2'>
            <div className='lg:flex lg:justify-evenly lg:items-center'>
                <div className=' animate__animated animate__fadeInLeft animate__delay-1s'>
                    <div className='mb-2'>
                        <h1 className=' md:text-xl sm:text-lg text-lg text-[rgb(3,204,184)]'>Hello, I am</h1>
                    </div>
                    <div className='mb-2'>
                        <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-lg text-white font-extrabold text-uppercase animate__animated animate__fadeInUp animate__delay-1s'>Md. Ashikur Rahaman Api</h2>
                    </div>
                    <div>
                        <h1 className='lg:text-3xl md:text-2xl sm:text-xl text-[rgb(198,208,220)] font-bold animate__animated animate__fadeInUp animate__delay-2s'><Typewriter
                            words={
                                [
                                    "MERN Stack Developer .",
                                    "React Frontend Developer .",
                                    "Web Developer .",
                                    "Freelancer .",
                                    "Designer .",
                                    "C & C++ Programmer .",
                                    "Python Learner .",
                                    "JavaScript Enthusiast .",
                                    "TypeScript Enthusiast .",
                                    "SEO Executive .",
                                    "Canva Specialist .",
                                    "MS Office Expert .",
                                    "MySQL & PHP Developer ."
                                ]
                                }
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000} />
                        </h1>
                    </div>
                    <div className='mt-4 animate__animated animate__fadeInUp animate__delay-3s'>
                        <p className='text-[rgb(140,155,148)] lg:text-lg md:text-lg sm:text-lg'>I transform ideas into smooth, secure, and scalable web solutions <br />using modern technologies and clean design.</p>
                    </div>
                    {/* getin touch and view work buttons */}
                    <div className='lg:mt-8 lg:flex lg:justify-evenly grid grid-cols-2 lg:space-x-0 space-x-6 mt-4 animate__animated animate__fadeInUp animate__delay-5s'>
                        <button className='lg:px-4 lg:py-3 px-3 py-2 bg-[rgb(0,150,137)] hover:bg-teal-700 text-white font-bold 
                         text-lg rounded-md transform hover:transition hover:scale-110 duration-150'>Get In Touch</button>
                        <button className='lg:px-6 lg:py-2 px-3 py-2 text-lg border-gray-600 bg-gray-800 lg:bg-[rgb(255,255,255)] font-bold text-white border-2 hover:border-gray-600 
                        rounded-md hover:bg-gray-800 transform hover:transition hover:scale-110 duration-150'>View Work</button>
                    </div>
                    {/* find me in button */}
                     <div className='flex justify-between mt-2 mb-6'>
                    <div className='lg:mt-8 animate__animated animate__fadeInUp animate__delay-6s'>
                        <h1 className='lg:text-2xl md:text-xl text-lg text-[rgb(148,161,173)] uppercase '>Find Me In</h1>
                        <div className='lg:text-xl md:text-lg text-white mt-4 lg:space-x-6 space-x-4 '>
                            <button className='p-2 bg-black text-[#1877F2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><a target='_blanck' href="https://www.facebook.com/share/1YwWi3fj7H/"><FaSquareFacebook /></a></button>
                            <button className='p-2 bg-black text-[#1DA1F2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><a target='_blank' href=""><FaTwitter /></a></button>
                            <button className='p-2 bg-black text-[#0A66C2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><a target='_blank' href="https://www.linkedin.com/in/ashik-api-767765341"><FaLinkedinIn /></a></button>
                            <button className='p-2 bg-black text-[#fafbfc] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><a target='_blank' href="https://github.com/ashikapi"><FaGithubSquare /></a></button> 
                        </div>
                    </div>
                    <div className='lg:mt-8 animate__animated animate__fadeInUp animate__delay-7s'>
                        <h1 className='lg:text-2xl md:text-xl text-lg text-[rgb(148,161,173)] uppercase'>Best Skill On</h1>
                        <div className='lg:text-xl md:text-lg text-white mt-4 lg:space-x-6 space-x-4 '>
                            <button className='p-2 bg-black text-blue-300 shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><RiReactjsLine /></button>
                            <button className='p-2 bg-black text-[#3C873A] shadow-md shadow-gray-300 rounded-xl  hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><FaNodeJs /></button>
                            <button className='p-2 bg-black text-blue-400 shadow-md shadow-gray-300 rounded-xl  hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><RiTailwindCssFill /></button>
                            <button className='p-2 bg-black text-[#F06529] shadow-md shadow-gray-300 rounded-xl  hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><SiHtml5 /></button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className=' flex items-center justify-center p-1 md:ml-0 md:mr-0 ml-8 mr-8 rounded-xl bg-gradient-to-tr from-cyan-400 via-yellow-200 to-orange-500'>
                    <div className="bg-[#1e293b] p-2 rounded-2xl">
                    <img className='w-80 rounded-xl ' src={profileashik} alt="Profile Image" /></div></div>
            </div>
        </div>
    )
}

export default Home