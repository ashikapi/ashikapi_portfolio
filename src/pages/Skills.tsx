import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineJavaScript } from "react-icons/ai";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { TbBrandTypescript } from "react-icons/tb";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { TbSeo } from "react-icons/tb";

const technicalSkills = [
    { name: "HTML5", icon: <FaHtml5 className='text-[#F06529]' /> },
    { name: "CSS3", icon: <FaCss3 className='text-[#264de4]' /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className='text-blue-400' /> },
    { name: "Java Script", icon: <AiOutlineJavaScript className='text-[#F0DB4F]' /> },
    { name: "Type Script", icon: <TbBrandTypescript className='text-[rgba(49,120,198,1)]' /> },
    { name: "React", icon: <RiReactjsLine className='text-blue-300' /> },
    { name: "Next Js", icon: <RiNextjsFill className='text-[#0070F3]' /> },
    { name: "Node Js", icon: <FaNodeJs className='text-[#3C873A]' /> },
    { name: "Mongo DB", icon: <BiLogoMongodb className='text-[#E8E7D5]' /> },
    { name: "MySQL", icon: <GrMysql className='text-[#00758F]' /> },
];
const creativeSkills = [

    { name: 'Communication', paragraph: 'Clear articulation of technical concepts', icon: <IoChatbubblesSharp /> },
    { name: 'Team Collaboration', paragraph: 'Cross-functional coordination', icon: <FaPeopleGroup /> },
    { name: 'Search Engine Optimization (SEO)', paragraph: 'Effective application of on-page and off-page SEO techniques to improve website visibility and ranking.', icon: <TbSeo /> },
    { name: 'Microsoft Office', paragraph: 'Advanced Excel & documentation', icon: <BiLogoMicrosoftTeams /> },
    // {name:'',paragraph:'',icon:},
    // {name:'',paragraph:'',icon:},
    // {name:'',paragraph:'',icon:},
    // {name:'',paragraph:'',icon:},
];



const Skills = () => {
    return (
        <div className='flex justify-evenly items-center md:py-10 py-6 px-2 md:px-10 bg-[rgb(243,244,246)]'>
            <div>
                <div className='flex justify-center items-center'>
                    <div className='mx-auto mt-10 mb-10'>
                        <h1 className='text-black lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold'>
                            My Expertise<span className='lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-[rgb(0,150,137)] font-extrabold'>Core </span>
                            <span className='lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-[rgb(0,150,137)] font-extrabold'>Competencies</span>
                        </h1>
                    </div>
                </div>
                <div className='xl:flex justify-evenly items-center gap-6'>
                    <div className=''>
                        <div className='flex justify-evenly'>
                            <div>
                                <h1 className='lg:text-3xl md:text-2xl sm:text-xl text-xl font-semibold mb-3'>Technical Proficiencies</h1>
                                <p className='mb-6 sm:text-lg opacity-45 font-semibold'>Mastered through hands-on projects and continuous upskilling:</p> </div>
                        </div>
                        <ul className='grid grid-cols-2 md:p-10 p-4 shadow-2xl bg-[rgb(15,23,43)] shadow-gray-400 rounded-3xl md:gap-6 gap-4'>
                            {technicalSkills.map((skills, index) => (
                                // <li className='grid grid-cols-2 items-center gap-10 xl:gap-10 lg:gap-10 md:gap-20 xl:px-10 xl:py-6 lg:px-1 lg:py-6 md:py-6 md:pr-16 px-2 py-2 bg-white text-xl shadow-2xl rounded-2xl mt-2 mb-2 xl:ml-4 xl:mr-4 lg:pl-3 lg:pr-16 ml-2 mr-2 border-b-4 border-b-red-500 transform hover:translate-2 scale-100 duration-500' key={index}>
                                //     <label className='px-2 py-2 xl:pl-5 xl:pr-12 lg:pl-2 lg:pr- md:pl-2 md:pr-10 pl-3.5 rounded-lg md:text-3xl sm:text-2xl text-xl bg-black shadow-2xl shadow-white'>{skills.icon}</label>
                                //     <label className='md:font-bold font-semibold text-lg -ml-5'>{skills.name}</label>
                                // </li>
                                <li key={index} className="group flex md:justify-start justify-normal items-center md:gap-6  gap-6 bg-white text-xl shadow-2xl rounded-2xl md:px-10 md:py-6 px-2 py-2 border-b-4 border-b-red-500 transform hover:translate-2 scale-100 duration-500">
                                    <label className="px-2 py-2 rounded-lg md:text-3xl sm:text-2xl text-center text-xl bg-black shadow-2xl shadow-white animate-pulse group-hover:animate-none cursor-none">{skills.icon}</label>
                                    <label className="md:font-bold font-semibold text-lg">{skills.name}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className=''>

                        <div className='max-w-4xl'>
                            <div>
                                <h1 className='lg:text-3xl md:text-2xl sm:text-xl text-xl font-semibold mb-3 mt-6'>Professional & Creative Skills</h1>
                                <p className='mb-6 sm:text-lg opacity-45 font-semibold'>Complementary abilities that enhance project execution:</p>
                            </div>
                            <ul className='md:grid md:grid-cols-2 p-4 shadow-2xl bg-[rgb(15,23,43)] shadow-gray-400 rounded-3xl gap-6 md:space-y-0 space-y-4'>
                                {creativeSkills.map((Tskills, index) => (
                                    <li
                                        key={index}
                                        className='flex items-start gap-4 bg-white text-xl shadow-2xl rounded-2xl
                                        border-t-4 border-t-red-500 transform scale-100 p-4 w-full h-40 transition-all delay-150 duration-500 
                                        ease-in-out hover:-translate-y-1 hover:scale-105 '>
                                        <div className='p-3 shadow-2xl shadow-white bg-black rounded-lg text-3xl text-blue-400 hover:text-orange-400'>
                                            {Tskills.icon}
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='text-xl font-bold'>{Tskills.name}</div>
                                            <div className='opacity-40 font-semibold text-sm'>{Tskills.paragraph}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills