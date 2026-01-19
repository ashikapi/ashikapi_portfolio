import { TbWindowMinimize } from "react-icons/tb";
import projectImage1 from '../images/project_image/DigiCart.png';
import projectImage2 from '../images/project_image/HRMS.png';
import projectImage3 from '../images/project_image/Velora.png';
import projectImage4 from '../images/project_image/bmcbd.png';
import projectImage5 from '../images/project_image/akashadhikary.png';
import projectImage6 from '../images/project_image/TravelAgency.png';
import projectImage7 from '../images/project_image/Webify Academy.png';


const featuredetails = [
  {
    img:projectImage1,
    title: 'DigiKart – Gift Card & Game Top-Up Platform',
Description: 'Dynamic gift card platform featuring OTP login and SSLCommerz checkout.',
Tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'Java Script', 'PHP Mailer'],
url: 'https://github.com/ashikapi/DigiKart'
  },
  { img: projectImage2,
    title: 'HRMS – Human Resource Management System',
Description: 'Internship project for HR Management UI using React & Tailwind CSS.',
Tech: ['React', 'Type Script', 'Tailwind CSS'],
url: '#'
  },
  {
    img: projectImage3,
    title: 'Velora (Online Shop)',
    Description: 'Modern fashion e-commerce UI with responsive design.',
    Tech: ['React', 'Type Script', 'Tailwind CSS'],
    url: 'https://github.com/ashikapi/VELORA-online-shop'
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
    img: projectImage4,
    title: 'BMCBD – CIPS-Focused Corporate Website',
Description: 'A frontend-developed corporate website for a CIPS-focused organization, featuring responsive layout, structured content, and optimized performance.',
Tech:[ 'React', 'Tailwind CSS', 'Type Script' ],
url: 'https://bmcbd.netlify.app/'
  },
  {
    img: projectImage5,
    title: 'Modern Personal Portfolio Website',
    Description: 'A responsive personal portfolio website built using Next.js, Tailwind CSS, and TypeScript to showcase projects, skills, and professional profile with a modern design.',
    Tech: ['Next.Js', 'Type Script', 'Tailwind CSS'],
    url: 'https://akashadhikary.netlify.app/'
  },
  {
    img: projectImage6,
    title: 'Travel Agency Website',
    Description: 'A modern travel agency website that showcases popular destinations, tour packages, and travel services with intuitive navigation and engaging visuals.',
    Tech: ['React', 'Type Script', 'Tailwind CSS'],
    url: 'https://travelagencyfortravel.netlify.app/'
  },
  {
    img: projectImage7,
    title: 'Webify Academy (online learning platform)',
    Description: 'A modern digital skills and IT training platform designed to offer courses in web development, digital marketing, design, and other career-focused technologies.',
    Tech: ['Next.Js', 'Type Script', 'Tailwind CSS'],
    url: 'https://webify-academy.vercel.app/'
  },
]

const FeaturedProjects = () => {
  return (
    <div className='flex justify-center items-center mt-12 mb-12 md:px-10 px-2'>
        <div>
            <div className='flex justify-center items-center'>
                <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-extrabold text-slate-900 mb-4">Featured<span className='lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-teal-600'>Projects</span></h1>
            </div>
            <div className=" mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
  {featuredetails.slice(0).reverse().map((project, index) => (
    <div
      key={index}
      className="group flex flex-col bg-white shadow-sm shadow-gray-300 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-gray-400 transition-shadow duration-300"
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <img
          src={project.img}
          alt={project.title}
          className="w-full md:h-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </a>

      <div className="p-4 flex flex-col flex-grow">
        <h1 className="text-xl font-semibold text-black mb-3 text-center">
          {project.title}
        </h1>

        <p className="text-start px-4 text-black opacity-80">
          {project.Description}
        </p>

        <div className="grid grid-cols-4 gap-2 mt-4 text-[rgb(33,156,137)] pb-5">
          {project.Tech.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[rgb(203,251,241)] rounded-md sm:text-sm text-xs text-center"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex justify-center items-center w-full p-2 border border-[rgb(90,185,177)] text-[rgb(8,157,153)] rounded-xl gap-2 text-xl hover:bg-teal-50 hover:text-black font-semibold"
        >
          <TbWindowMinimize /> Visit Now
        </a>
      </div>
    </div>
  ))}
</div>

            
        </div>
    </div>
  )
}

export default FeaturedProjects