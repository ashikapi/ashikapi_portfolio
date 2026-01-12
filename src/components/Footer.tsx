import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import '../../style/style.css';

const Footer = () => {
  return (
    <footer className="relative bg-[rgb(29,41,61)] text-[rgb(255,255,255)] py-10 mt-0 clip-footer">
      {/* <div className="w-auto mx-auto px-4 xl:ml-[660px] lg:ml-[410px] lg:mt-40 md:ml-78  mt-20 ml-35"> */}
      <div className="w-full mx-auto text-center lg:mt-40 mt-20">
        <h2 className="md:text-3xl font-bold mb-2">Ashik Api.</h2>
        <p className="text-[rgb(129,150,159)] lg:mb-6">Web Developer & SEO Expeart</p>

        <div className='lg:mt-8 mt-4'>
          <div className='text-xl text-white mt-4 space-x-6 '>
            <button className='p-2 animation-roteIconB bg-black text-[#1877F2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'>
              <a target='_blanck' href="https://www.facebook.com/share/1YwWi3fj7H/"><FaSquareFacebook /></a>
            </button>
            <button className='p-2 animation-roteIconB bg-black text-[#1DA1F2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'>
              <a target='_blank' href=""><FaTwitter /></a>
            </button>
            <button className='p-2 animation-roteIconA bg-black text-[#0A66C2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'>
              <a target='_blank' href="https://www.linkedin.com/in/ashik-api-767765341"><FaLinkedinIn /></a>
            </button>
            <button className='p-2 animation-roteIconA bg-black text-[#fafbfc] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'>
              <a target='_blank' href="https://github.com/ashikapi"><FaGithubSquare /></a>
            </button>
          </div>
        </div>
      </div>
      {/* <div className='mt-10 opacity-40'><hr /></div> */}
      <div className="flex justify-center items-center mt-10 border-b w-full opacity-10"></div>
      <div className='flex justify-center items-center mt-5'>
        <div className='text-center'>
          <div className="text-[rgb(136,147,162)]">© 2025 Ashik Api. All rights reserved.</div>
          <div className='mt-5 sm:mb-0 mb-5 space-x-4  text-[rgb(136,147,162)] '>
            <button className="hover:text-teal-400"><a href="#home">Privacy Policy</a></button>
            <button className="hover:text-teal-400"><a href="#home">Terms of Service</a></button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
