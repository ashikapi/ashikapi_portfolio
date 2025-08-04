import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";

const contactInfo = [
    { name: "Email", icon: <IoMdMail />, details: "ashikapi65@gmail.com" },
    { name: "Phone Number", icon: <FaPhoneVolume />, details: "+8801878333115" },
    { name: "Location", icon: <MdLocationPin />, details: "Dhaka Bangladesh" },
]

const Contact = () => {
    return (
        <div className='flex justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 py-20 bg-gray-300 pb-8'>
            <div className='w-full max-w-7xl'>
                <div>
                    <h1 className='lg:ml-52 lg:mb-10 mb-5'>
                        <span className='uppercase text-black lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold'>Get In Touch </span>
                        <span className='lg:text-6xl md:text-4xl sm:text-3xl text-4xl text-[rgb(108,99,255)] font-extrabold'>Contact</span>
                        <span className='lg:text-6xl text-4xl text-black font-extrabold'> Me</span>
                    </h1>
                </div>
                <div>
                    <div className='text-center mb-10'>
                        <p>Have a project in mind or want to discuss a collaboration? I'd love to hear from you. 
                            Fill out the form below or reach out through any of the contact methods.</p>
                            </div>
                </div>
                <div className='lg:flex lg:justify-between'>
                    <div className='w-96 animate__animated animate__fadeInLeft'>
                        <h1 className='lg:text-3xl text-xl font-extrabold mb-2'>Let's Discuss Your Project</h1>
                        <p>I'm available for freelance work and would love to turn your ideas into reality. 
                            Feel free to contact me using any of the methods below.</p>
                        <div>
                            <ul> {contactInfo.map((contact, index) => (
                                <li key={index} className='flex items-center gap-4 space-y-4'>
                                    <label className='p-4 mt-4 bg-white text-orange-500 text-2xl shadow-2xl shadow-black rounded-full'>{contact.icon}</label>
                                    <div>
                                        <p className='italic text-2xl font-bold'>{contact.name}</p>
                                        <p className='text-lg font-semibold opacity-80'>{contact.details}</p>
                                    </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div className='mt-8'>
                            <h1 className='text-2xl text-black '>Connect With Me</h1>
                            <div className='text-xl text-white mt-4 space-x-6 '>
                                <button className='p-2 bg-black text-[#1877F2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><a target='_blanck' href="https://www.facebook.com/share/1YwWi3fj7H/"><FaSquareFacebook /></a></button>
                                <button className='p-2 bg-black text-[#1DA1F2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><a target='_blank' href=""><FaTwitter /></a></button>
                                <button className='p-2 bg-black text-[#0A66C2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><a target='_blank' href="https://www.linkedin.com/in/ashik-api-767765341"><FaLinkedinIn /></a></button>
                                <button className='p-2 bg-black text-[#fafbfc] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><a target='_blank' href="https://github.com/ashikapi"><FaGithubSquare /></a></button>
                            </div>
                        </div>
                    </div>
                    <div className='mr-10 animate__animated animate__fadeInRight'>
                        <form action="submit">
                        <div className='lg:space-x-4 space-x-2 mt-5 mb-2 flex justify-evenly'>
                            
                            <label><input required type="text" className='border-none lg:p-4 lg:w-[300px] w-[170px] h-[60px] px-9 py-4 rounded-2xl bg-white text-left' placeholder='Your Name' /></label>
                            <label><input required type="email" className='border-none lg:p-4 lg:w-[300px] w-[170px] h-[60px] px-9 py-4 rounded-2xl bg-white text-left' placeholder='Your Email' /></label>
                        </div>
                        <div className='mb-2'><input required type="text" className='border-none lg:px-[130px] lg:py-6 lg:w-[630px] w-[360px] h-[60px] px-9 py-4 rounded-2xl bg-white text-center' placeholder='Subject' /></div>
                        <div className='mb-2'><input required type="text" className='border-none lg:p-[130px] lg:w-[630px] w-[360px] h-[300px] px-18 py-4 rounded-2xl bg-white' placeholder='Write Your Message Here....' /></div>
                        <button className='flex items-center gap-2 mt-4 px-6 py-3 text-white text-md font-bold border-none rounded-xl bg-[rgb(108,99,255)] shadow-2xl shadow-gray-300'>Send Message<BsSendFill /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact