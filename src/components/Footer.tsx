import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#2c2a3a] text-white py-10 mt-0 clip-footer">
      <div className="w-auto mx-auto px-4 lg:ml-[660px] lg:mt-40 mt-20 ml-35">
        <h2 className="md:text-3xl font-bold mb-2">Ashik Api.</h2>
        <p className="text-gray-300 lg:mb-6 lg:-ml-10 -ml-15">Web Developer & SEO Expeart</p>

         <div className='lg:mt-8 lg:-ml-6 mt-4 -ml-14'>
              <div className='text-xl text-white mt-4 space-x-6 '>
                    <button className='p-2 bg-black text-[#1877F2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><a target='_blanck' href="https://www.facebook.com/share/1YwWi3fj7H/"><FaSquareFacebook /></a></button>
                    <button className='p-2 bg-black text-[#1DA1F2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><a target='_blank' href=""><FaTwitter /></a></button>
                    <button className='p-2 bg-black text-[#0A66C2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><a target='_blank' href="https://www.linkedin.com/in/ashik-api-767765341"><FaLinkedinIn /></a></button>
                    <button className='p-2 bg-black text-[#fafbfc] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 cursor-pointer transform hover:translate-2 scale-105 duration-200'><a target='_blank' href="https://github.com/ashikapi"><FaGithubSquare /></a></button>
              </div>
          </div>
      </div>
      <div className='mt-10 opacity-40'><hr /></div>
      <div className='flex justify-center items-center mt-5'>
      <div className=''>
        <div>© 2025 Ashik Api. All rights reserved.</div>
        <div className='mt-5 space-x-4 ml-4 text-purple-300'><button>Privacy Policy</button>
        <button>Terms of Service</button>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
