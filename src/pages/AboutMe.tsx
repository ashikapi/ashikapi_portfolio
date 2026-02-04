// import ashikapi from "../images/Ashik.jpg"
import { FaDownload, FaTimes } from "react-icons/fa";
import { useState } from "react";

const AboutMe = () => {
  const [downloaded, setDownloaded] = useState(false);
  const [openCV, setOpenCV] = useState(false);


  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000); // 3s por abar red e ashbe
    alert("CV Downloaded successfully !"); // Alert message
  };
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 lg:py-20 py-6 bg-[rgb(248,250,252)]">
      <div className="w-full max-w-7xl">

        {/* Heading */}
        <div className="flex justify-center items-center lg:mb-20 pt-5 mb-10">
          <h1 className="">
            <span className="text-xl sm:text-2xl font-semibold text-black">Get To Know More</span>
            <span className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-[rgb(0,150,137)]"> About </span>
            <span className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-[rgb(0,150,137)] font-extrabold">
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
          <div className="flex justify-center hover:-rotate-2 transform transition-all duration-700 hover:scale-105">
            <img
              className='xl:w-96 lg:w-full w-64 rounded-3xl shadow-2xl shadow-gray-400'
              src="https://i.postimg.cc/02w4Qxbn/Api.jpg"
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
            <div className="pt-8 flex lg:justify-normal justify-center items-center md:gap-10 gap-4">
  {/* View CV Button */}
  <button
    onClick={() => setOpenCV(true)}
    className="px-4 py-2 md:text-lg text-sm border-2 border-teal-50 bg-teal-600 font-bold text-white rounded-md
               transition-all duration-500 hover:scale-110 hover:text-white/70"
  >
    View CV Now!
  </button>

  {/* Download CV */}
  <a
    href="/Md.Ashikur-Rahaman-Api-CV.pdf"
    download
    onClick={handleDownload}
    className={`flex items-center gap-2 px-4 py-2 rounded-md md:text-lg text-sm font-semibold text-white
      transition-all duration-500 animate-bounce hover:bg-red-700
      ${downloaded ? "bg-green-600" : "bg-red-500"}`}
      style={{ animationDelay: "0.5s" }}
  >
    <FaDownload />
    {downloaded ? "Downloaded!" : "Download CV"}
  </a>
</div>

          </div>
        </div>

      </div>
      {openCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

          <div className="relative w-[90%] md:w-[70%] h-[80%] md:h-[90%] bg-white rounded-lg shadow-lg">

            {/* Close button */}
            <button
              onClick={() => setOpenCV(false)}
              className="absolute top-0 right-0 text-xl font-bold cursor-pointer text-[rgb(0,150,137)] hover:text-red-400"
            >
            <FaTimes />
            </button>

            {/* Iframe */}
            <iframe
              src="https://drive.google.com/file/d/1YEEO7W_9nWud4y53aOUzkDxFzE_1mmRM/preview"
              className="w-full h-full rounded-lg"
              allow="autoplay"
            ></iframe>

          </div>
        </div>
      )}
    </div>
  )
}

export default AboutMe;
