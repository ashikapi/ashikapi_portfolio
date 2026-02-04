import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const contactInfo = [
  { name: "Email", icon: <IoMdMail />, details: "ashikapi65@gmail.com", contact: 'mailto:ashikapi65@gmail.com' },
  { name: "Phone Number", icon: <FaPhoneVolume />, details: "+8801878333115", contact: 'tel:+8801878333115' },
  { name: "Location", icon: <MdLocationPin />, details: "Dhaka, Bangladesh" },
];

const Contact = () => {
  const [successMsg, setSuccessMsg] = useState("");
const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  );
  const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData ({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
  from_name: formData.name,
  reply_to: formData.email,   // user email
  name: formData.name,
  email: formData.email,
  subject: formData.subject,
  message: formData.message,
  time: new Date().toLocaleString(),
};

    emailjs
    .send (
      "service_wdmo32i",     // 👉 Your Service ID
        "template_3relswe",    // 👉 Your Template ID
        templateParams,
        "b016vsZzXrJ33E53O"       // 👉 Your Public Key
    )
    .then(
        () => {
          setLoading(false);
          setSuccessMsg("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => setSuccessMsg(""), 5000);
        },
        (error) => {
          setLoading(false);
          setErrorMsg("Failed to send message!");
          setTimeout(() => setSuccessMsg(""), 5000);
          console.log(error);
        }
      );
  };

  return (
    <div className="flex justify-center items-center px-6 md:px-10 lg:px-20 lg:py-20 bg-[rgb(15,23,43)] pb-8 pt-8">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <div>
          <h1 className="text-center mb-5 lg:mb-10">
            <span className="uppercase text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              Get In Touch{" "}
            </span>
            <span className="text-[rgb(0,213,190)] font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-6xl">
              Contact
            </span>
            <span className="text-[rgb(0,213,190)] font-extrabold text-3xl lg:text-6xl"> Me</span>
          </h1>
        </div>

        {/* Description */}
        <div>
          <p className="md:text-center text-left mb-10 text-[rgb(135,154,173)]">
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you.
            Fill out the form below or reach out through any of the contact methods.
          </p>
        </div>

        {/* Main Section */}
        <div className="lg:flex lg:justify-between lg:gap-6 xl:gap-0">

          {/* Contact Info */}
          <div className="w-full max-w-md lg:w-96 mb-10 lg:mb-0 animate__animated animate__fadeInLeft">
            <h2 className="text-white font-extrabold text-xl lg:text-3xl mb-2">
              Let's Discuss Your Project
            </h2>
            <p className="text-[rgb(135,154,173)] mb-6">
              I'm available for freelance work and would love to turn your ideas into reality.
              Feel free to contact me using any of the methods below.
            </p>

            <ul>
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start gap-4 mt-4">
                  <div className="p-4 bg-white text-orange-500 text-2xl shadow-2xl shadow-black rounded-full animate-pulse">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="italic text-xl text-white font-bold">{contact.name}</p>
                    {contact.contact ? (
                      <a href={contact.contact} className="text-lg text-[rgb(135,154,173)] font-semibold opacity-80 hover:text-teal-400">
                        {contact.details}
                      </a>
                    ) : (
                      <p className="text-lg text-[rgb(135,154,173)] font-semibold opacity-80">{contact.details}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Social Buttons */}
            <div className="mt-8">
              <h2 className="text-2xl text-white mb-4">Connect With Me</h2>
              <div className="flex gap-4 text-xl animation-translateA">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/share/1YwWi3fj7H/">
                  <button className="p-2 bg-black text-[#1877F2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 transform scale-105 duration-200">
                    <FaSquareFacebook />
                  </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                  <button className="p-2 bg-black text-[#1DA1F2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 transform scale-105 duration-200">
                    <FaTwitter />
                  </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ashik-api-767765341">
                  <button className="p-2 bg-black text-[#0A66C2] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 transform scale-105 duration-200">
                    <FaLinkedinIn />
                  </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ashikapi">
                  <button className="p-2 bg-black text-[#fafbfc] shadow-md shadow-gray-300 rounded-xl hover:text-red-500 transform scale-105 duration-200">
                    <FaGithubSquare />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex justify-center items-center lg:mr-10 animate__animated animate__fadeInRight xl:p-10 lg:p-6 lg:bg-[rgb(30,41,57)] rounded-2xl w-full max-w-lg">
            <form onSubmit={handelSubmit}
             className="flex flex-col w-full gap-4 px-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  required
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handelChange}
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 w-full sm:w-1/2"
                  placeholder="Your Name"
                />
                <input
                  required
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handelChange}
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 w-full sm:w-1/2"
                  placeholder="Your Email"
                />
              </div>
              <input
                required
                type="text"
                id="subject"
                value={formData.subject}
                  onChange={handelChange}
                className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 w-full"
                placeholder="Subject"
              />
              <textarea
                required
                id="message"
                value={formData.message}
                onChange={handelChange}
                className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 w-full h-40 resize-none"
                placeholder="Write Your Message Here..."
              />
              {successMsg && <p className="text-white px-4 py-2 rounded-sm bg-[#0f172b]/50 border border-teal-50/50 font-bold">{successMsg}</p>}
              {errorMsg && <p className="text-red-500 px-4 py-2 rounded-sm bg-[#0f172b]/50 border border-red-50/50 font-bold">{errorMsg}</p>}
              <button 
               type="submit"
               className="flex items-center justify-center gap-2 mt-4 px-6 py-3 text-white text-md font-bold border-none rounded-xl bg-teal-600 hover:bg-teal-700 shadow-2xl transition-transform duration-300 hover:scale-105">
                {loading ? "Sending..." : "Send Message"}<BsSendFill />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
