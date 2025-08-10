import { TbWindowMinimize } from "react-icons/tb";

const featuredetails = [
  {
    title: 'DigiKart – Gift Card & Game Top-Up Platform',
Description: 'Dynamic gift card platform featuring OTP login and SSLCommerz checkout.',
Tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'PHPMailer']
  },
  {
    title: 'HRMS – Human Resource Management System',
Description: 'Internship project for HR Management UI using React & Tailwind CSS.',
Tech: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Fashion--House (Online Shop)',
    Description: 'Modern fashion e-commerce UI with responsive design.',
    Tech: ['HTML', 'CSS', 'Tailwind CSS']
  },
  {
   title: 'Farmer Ecommerce Frontend',
Description: 'Responsive product listing UI for agricultural e-commerce.',
Tech:[ 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Digital Agency Landing Page',
Description: 'Single page landing site with scroll animation & responsive layout.',
Tech:[ 'HTML', 'CSS', 'JavaScript']
  }
]

const FeaturedProjects = () => {
  return (
    <div className='flex justify-center items-center mt-12 mb-12'>
        <div>
            <div className='flex justify-center items-center'>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Featured <span className='text-teal-600'>Projects</span></h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                {featuredetails.map((project, index) => (
            <div key={index} className='flex flex-col items-center bg-white text-white p-4 shadow-sm shadow-gray-300 rounded-xl'>
                <h1 className='text-xl font-semibold text-black mb-3'>{project.title}</h1>
                <p className='text-center text-black opacity-80'>{project.Description}</p>
                <div className='grid grid-cols-4 gap-2 mt-4 text-[rgb(33,156,137)]'>
                  {project.Tech.map((tech, index) => (
                <button key={index} className='px-2 py-1 bg-[rgb(203,251,241)] rounded-md'>{tech}</button>
                  ))}
                </div>
                <button className='flex justify-center items-center text-center mt-10 w-full p-2 border border-[rgb(90,185,177)] text-[rgb(8,157,153)] rounded-xl gap-4 text-xl'><TbWindowMinimize /> Visit Now</button>
                </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default FeaturedProjects