import ashikapi from "../images/Ashik.jpg"
import { FaDownload } from "react-icons/fa";
import { useState } from "react";

const AboutMe = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000); // 3s por abar red e ashbe
  };
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 py-20 bg-[rgb(248,250,252)]">
      <div className="w-full max-w-7xl">

        {/* Heading */}
        <div className="flex justify-center items-center pt-20 mb-20">
          <h1 className="">
            <span className="text-xl sm:text-2xl font-semibold text-black">Get To Know More</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-[rgb(0,150,137)]"> About </span>
            <span className="text-4xl sm:text-5xl text-[rgb(0,150,137)] font-extrabold">
              Me
            </span>
          </h1>
        </div>
        {/* <div className="text-center mb-10">
          <h1 className="text-xl sm:text-2xl font-semibold text-black">Get To Know More</h1>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black">
            About <span className="text-[rgb(108,99,255)]">Me</span>
          </h2>
        </div> */}

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row items-center justify-evenly gap-10'>

          {/* Image */}
          <div className="flex justify-center">
            <img
              className='w-64 sm:w-80 md:w-96 rounded-3xl shadow-2xl shadow-gray-400'
              src={ashikapi}
              alt="Ashik Api"
            />
          </div>

          {/* Info Text */}
          <div className='text-center lg:text-left max-w-2xl'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl text-[rgb(0,150,137)] font-extrabold mb-4'>
              Who am I?
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-gray-500'>
              I’m a passionate and self-driven MERN Stack Developer with skills in React, TypeScript, Tailwind CSS, JavaScript, and MySQL. I also work with C, C++, Python, and PHP. Alongside web development, I have hands-on experience in SEO, Canva design, and MS Office. I love turning ideas into functional, user-friendly, and creative digital solutions.
            </p>

            {/* Experience Section */}
            <div className="mt-6">
              <h2 className="text-lg sm:text-xl font-bold text-black mb-2">Experience</h2>
              <p className="text-sm sm:text-base text-gray-500">
                Built multiple full-stack projects using MERN, implemented user auth, admin dashboards, and chatbot systems.
              </p>
            </div>
            <div className="pt-8">
              <a
                href="/Md.-Ashikur-Rahaman-Api_Frontend-Developer_CV-Resume.pdf" // CV link
                download
                onClick={handleDownload}
              >
                <button
                  className={`flex justify-evenly items-center gap-2 lg:px-6 lg:py-3 md:px-4 md:py-2 px-4 py-2 border mb-2 text-white rounded-2xl lg:font-bold md:font-bold font-semibold text-lg animate-bounce duration-1000 hover:bg-red-700 ${downloaded ? "bg-green-600" : "bg-red-500"
                    }`}
                >
                  <FaDownload />
                  {downloaded ? "Downloaded!" : "Download CV"}
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutMe;
