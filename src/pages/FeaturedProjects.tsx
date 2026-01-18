import { TbWindowMinimize } from "react-icons/tb";
import projectImage1 from '../images/project_image/bmcbd.png';
import projectImage4 from '../images/project_image/TravelAgency.png';
import projectImage3 from '../images/project_image/DigiCart.png';
import projectImage2 from '../images/project_image/akashadhikary.png';

const featuredetails = [
  {
    img:projectImage3,
    title: 'DigiKart – Gift Card & Game Top-Up Platform',
Description: 'Dynamic gift card platform featuring OTP login and SSLCommerz checkout.',
Tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'Java Script', 'PHP Mailer'],
url: ''
  },
  {
    title: 'HRMS – Human Resource Management System',
Description: 'Internship project for HR Management UI using React & Tailwind CSS.',
Tech: ['React', 'Type Script', 'Tailwind CSS'],
url: '#'
  },
  {
    title: 'Fashion--House (Online Shop)',
    Description: 'Modern fashion e-commerce UI with responsive design.',
    Tech: ['React', 'Type Script', 'Tailwind CSS'],
    url: '#'
  },
//   {
//    title: 'Farmer Ecommerce Frontend',
// Description: 'Responsive product listing UI for agricultural e-commerce.',
// Tech:['React', 'Type Script', 'Tailwind CSS'],
// url: '#'
//   },
//   {
//     title: 'Digital Agency Landing Page',
// Description: 'Single page landing site with scroll animation & responsive layout.',
// Tech:[ 'HTML', 'CSS'],
// url: '#'
//   },
   {
    img: projectImage1,
    title: 'BMCBD – CIPS-Focused Corporate Website',
Description: 'A frontend-developed corporate website for a CIPS-focused organization, featuring responsive layout, structured content, and optimized performance.',
Tech:[ 'React', 'Tailwind CSS', 'Type Script' ],
url: 'https://bmcbd.netlify.app/'
  },
  {
    img: projectImage2,
    title: 'Modern Personal Portfolio Website',
    Description: 'A responsive personal portfolio website built using Next.js, Tailwind CSS, and TypeScript to showcase projects, skills, and professional profile with a modern design.',
    Tech: ['Next.js', 'Type Script', 'Tailwind CSS'],
    url: 'https://akashadhikary.netlify.app/'
  },
  {
    img: projectImage4,
    title: 'Travel Agency Website',
    Description: 'A modern travel agency website that showcases popular destinations, tour packages, and travel services with intuitive navigation and engaging visuals.',
    Tech: ['React', 'Type Script', 'Tailwind CSS'],
    url: 'https://travelagencyfortravel.netlify.app/'
  },
]

const FeaturedProjects = () => {
  return (
    <div className='flex justify-center items-center mt-12 mb-12 md:px-10 px-2'>
        <div>
            <div className='flex justify-center items-center'>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Featured <span className='text-teal-600'>Projects</span></h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4'>
                {featuredetails.map((project, index) => (
            <div key={index} className='flex flex-col items-center bg-white text-white shadow-sm shadow-gray-300 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-gray-400 transition-shadow duration-300'>
              <img src={project.img} alt={project.title} className="w-full md:h-full h-60 rounded-t-xl mb-4 transform transition-all hover:scale-105 duration-700 md:object-cover object-center" />
              <div className="p-4">
                <h1 className='text-xl font-semibold text-black mb-3'>{project.title}</h1>
                <p className='text-center text-black opacity-80'>{project.Description}</p>
                <div className='grid grid-cols-4 gap-2 mt-4 text-[rgb(33,156,137)] pb-5'>
                  {project.Tech.map((tech, index) => (
                <button key={index} className='px-2 py-1 bg-[rgb(203,251,241)] rounded-md text-sm'>{tech}</button>
                  ))}
                </div>
                
                <button className='flex justify-center items-center text-center mt-auto w-full p-2 border border-[rgb(90,185,177)] text-[rgb(8,157,153)] rounded-xl gap-4 text-xl hover:bg-teal-50 hover:text-black font-semibold'><a href={project.url} target="_blanck" className="flex justify-evenly items-center gap-2"><TbWindowMinimize /> Visit Now</a></button>
                </div>
                </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default FeaturedProjects