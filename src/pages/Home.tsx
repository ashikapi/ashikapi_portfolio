import { Typewriter } from 'react-simple-typewriter'
// import profileashik from '../images/Ashik Api.jpg'
import 'animate.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiHtml5 } from "react-icons/si";
import profile from '../images/AAA.jpeg';


const Home = () => {

    const findMeIn = [
        {name: "Facebook", icon: <FaSquareFacebook />, link: "https://www.facebook.com/share/1YwWi3fj7H/", title: 'Ashik Api Facebook Profile', textColor: 'text-[#1877F2]'},
        {name: "Twitter", icon: <FaTwitter />, link: "https://x.com/AshikApi89119", title: 'Ashik Api Twitter Profile',textColor: 'text-[#1DA1F2]'},
        {name: "LinkedIn", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/ashik-api-767765341", title: 'Ashik Api LinkedIn Profile',textColor: 'text-[#0A66C2]'},
        {name: "GitHub", icon: <FaGithubSquare />, link: "https://github.com/ashikapi", title: 'Ashik Api GitHub Profile',textColor: 'text-[#fafbfc]'},
    ];

    const skills = [
        {name: "React", icon: <RiReactjsLine />, link: "#", title: 'React Developer', textColor: 'text-[#61DAFB]'},
        {name: "Node.js", icon: <FaNodeJs />, link: "#", title: 'Node.js Developer', textColor: 'text-[#339933]'},
        {name: "Tailwind CSS", icon: <RiTailwindCssFill />, link: "#", title: 'Tailwind CSS Developer', textColor: 'text-[#06B6D4]'},
        {name: "HTML5", icon: <SiHtml5 />, link: "#", title: 'HTML5 Developer', textColor: 'text-[#E34F26]'},
    ];

    return (
        <div className='bg-[rgb(15,23,43)] xl:min-h-screen lg:py-24 md:py-14 lg:px-0 py-6 px-4'>
            <div className='flex flex-col lg:flex-row lg:justify-evenly lg:items-center items-center'>
                <div className=' animate__animated animate__fadeInLeft animate__delay-1s'>
                    <div className='mb-2'>
                        <h1 className=' md:text-xl sm:text-lg text-lg lg:text-left
                         md:text-center text-[rgb(3,204,184)]'
                        >
                            Hello, I am
                        </h1>
                    </div>
                    <div className='mb-2'>
                        <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-lg lg:text-left 
                        md:text-center text-white font-extrabold text-uppercase animate__animated animate__fadeInUp 
                        animate__delay-1s'>
                            Md. Ashikur Rahaman Api
                            <span className="text-[rgb(3,204,184)]"> (অপি)</span>
                        </h2>
                    </div>
                    <div>
                        <h1 className='lg:text-3xl md:text-2xl sm:text-xl lg:text-left md:text-center 
                        text-[rgb(198,208,220)] font-bold animate__animated animate__fadeInUp animate__delay-2s'><Typewriter
                                words={
                                    [
                                        "MERN Stack Developer .",
                                        "React Frontend Developer .",
                                        "Next.js Frontend Developer .",
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
                        <p className='text-[rgb(140,155,148)] lg:text-lg md:text-lg sm:text-lg 
                         lg:text-left md:text-center md:mb-10 mb-5'
                         >
                            I transform ideas into smooth, secure, and scalable web solutions <br />using modern technologies and clean design.
                        </p>
                    </div>
                    {/* findmein and skills section  */}
                    <div className='flex justify-between items-center'>
                    {/* <div className='flex flex-col lg:flex-row lg:gap-20 mt-6'> */}

                                {/* find me section  */}

                        <div className='w-full lg:w-1/2 animate__animated animate__fadeInUp animate__delay-7s'>

                                {/* get in touch button with link  */}

                            <a href="mailto:ashikapi65@gmail.com"
                        className='cursor-none'>
                            <button className='md:px-6 md:py-2.5 lg:px-4 lg:py-3 px-4 py-2.5 bg-[rgb(0,150,137)] hover:bg-teal-700 text-white font-bold 
                         text-lg rounded-md transform hover:transition hover:scale-110 duration-500 cursor-none'>Get In Touch</button>
                         </a>
                          
                          {/* find me title  */}

                            <h2 className='lg:text-2xl md:text-xl md:mt-8 md:mb-5 mt-5 mb-3 text-lg text-[rgb(148,161,173)] uppercase '>Find Me In</h2>

                            {/* find me icons and links */}

                            <div className='inline-block md:space-x-5 space-x-3'>
                            {findMeIn.map((items, index) => (
                                <button
                                key={index}
                                 className={`md:p-2 p-1 bg-black ${items.textColor} shadow-md shadow-gray-300 rounded-xl
                                 hover:text-red-500 cursor-none transform hover:translate-2 scale-105 duration-200`}>
                                   <a target='_blank'
                                        className="cursor-none"
                                        href={items.link}
                                        rel='noopener noreferrer'>
                                        {items.icon}
                                        <span className='sr-only'>{items.title}</span>
                                    </a>
                                </button>
                                    
                            ))}
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 animate__animated animate__fadeInUp animate__delay-7s'>
                            <a href="#project"
                        className='cursor-none'>
                            <button className='lg:px-6 lg:py-2 px-6 py-2 text-lg border-gray-600 bg-gray-800
                             lg:bg-[rgb(255,255,255)] font-bold text-white border-2 hover:border-gray-600 
                        rounded-md hover:bg-gray-800 transform hover:transition hover:scale-110 duration-500 
                        cursor-none'
                        >
                            View Work
                        </button>
                        </a>
                            <h1 className='lg:text-2xl md:text-xl text-lg md:mt-8 md:mb-5 mt-5 mb-3 text-[rgb(148,161,173)] 
                            uppercase'
                            >
                                Best Skill On
                            </h1>
                            <div className='inline-block lg:space-x-5 space-x-3'>
                            {skills.map((items, index) => (
                                <button
                                key={index}
                                className={`md:p-2 p-1 bg-black ${items.textColor} shadow-md 
                                shadow-gray-300 rounded-xl  hover:text-red-500 cursor-none transform 
                                 hover:translate-2 scale-105 duration-200`}
                                >
                                    {items.icon}
                                </button>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center lg:rotate-6 lg:hover:rotate-0 transform transition-all 
                 duration-700 hover:scale-105 justify-center p-1 w-fit rounded-xl 
                 bg-gradient-to-tr from-cyan-400 via-yellow-200 to-orange-500 lg:mt-0 mt-8'
                 >
                    <div 
                     className="bg-[#1e293b] p-2 rounded-2xl"
                    >
                        <div className='relative group overflow-hidden'>
                        <img className='sm:w-80 w-60 rounded-xl '
                            // src="https://i.postimg.cc/V6FY2ncF/Ashik-Api.jpg"
                            src={profile}
                            alt="Ashik Api web developer profile picture" />
                            <div className='absolute inset-0'
                             >
                            </div>
                            <div className='shine'></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home