import React from "react";
import { AiFillMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const App = () => {
  return (
    <div className="font-sans text-white-900 bg-white">
      {/* Header */}
      <header className="bg-fuchsia-900 shadow-md sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-extrabold text-stone-50 tracking-wide">Fatima Anjum</div>
          <nav className="space-x-6 text-stone-50">
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-fuchsia-300 transition-colors duration-300 font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-b from-purple-400 to-white py-20 text-center animate-fade-in"
      >
        <div className="max-w-xl mx-auto">
          <img
            src="/Images/profile.png" alt="Profile"
            className="w-50 h-60 rounded-full mx-auto mb-6 border-4 border-white-400 shadow-md transform transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-4xl font-bold mb-2 text-fuchsia-950">Hi, I'm Fatima Anjum</h1>
          <p className="mb-6 text-lg text-gray-600">
            A Front-End Web Developer passionate about building responsive web apps
          </p>
          <a
            href="#contact"
            className="bg-fuchsia-950 text-white px-6 py-2 rounded-full hover:text-fuchsia-950 hover:bg-fuchsia-300 transition-colors duration-300 shadow"
          >
            Contact Me
          </a>
        </div>
      </section>

 {/* About Section */}
      <section id="about" className="bg-purple-200 py-20 animate-fade-left">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-fuchsia-950">About Me</h2>
          <p className="mb-8 text-gray-700 leading-relaxed">
            I’m a front-end web developer with hands-on experience in HTML, CSS, JavaScript, Tailwind CSS, React.js, and Bootstrap, focused on creating responsive and user-friendly interfaces. I also have basic knowledge of Node.js and MySQL, enabling me to contribute to full-stack projects. I aim to build clean, efficient, and accessible web applications.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "MySQL"].map((skill, i) => (
              <span
                key={i}
                className="bg-stone-50 text-fuchsia-950 px-3 py-1 rounded-full text-sm font-medium hover:bg-fuchsia-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-fuchsia-950 animate-fade-up">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-stone-50">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Restaurant Management System",
                description:
                  "Desktop Food Ordering App built using Java Swing and MySQL. Key features include a user-friendly interface for placing orders, menu display with item selection and quantity customization, and customer/order data storage. Designed for future scalability like admin panel integration.",

              },
              {
                title: "E-Commerce Website – Crafted Essentials",
                description:
                  "A clean and responsive e-commerce website created using HTML, CSS, and JavaScript. The site features product listings, a dynamic shopping cart, and interactive filtering—all without any frameworks. Designed with mobile-first principles to ensure a smooth experience across all devices.",
              },
              {
                title: "Portfolio Website",
                description:
                  "My personal portfolio showcasing web development skills. Built using React, Tailwind CSS, and Framer Motion for animation. Fully responsive and optimized for performance.",
              },
              {
                title: "Inventory Management System",
                description:
                  "A desktop application built with Java Swing and MySQL for managing inventory, products, and suppliers. Features include user login, CRUD operations, and real-time database updates. Created as part of a DBMS course project.",
              },
              {
                title: "Digital Clock",
                description:
                  "A basic digital clock application built with Java Swing. It displays the current time with real-time updates using GUI components and Java threads.",
              },

            ].map((project, index) => (
              <div
                key={index}
                className="border p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-gray-50"
              >
                <h3 className="font-semibold text-xl mb-2 text-purple-950">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <a href={project.link} className="text-blue-500 underline hover:text-blue-700 transition-all">
                  {project.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white animate-fade-in">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-950">Contact</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            ></textarea>
            <button
              type="submit"
              className="bg-fuchsia-950 text-white px-6 py-2 rounded-full hover:text-fuchsia-950 hover:bg-fuchsia-300 transition-colors duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-fuchsia-950 text-white text-center py-6 animate-fade-up">
        <div className="flex justify-center space-x-6 mb-3 text-lg">
        
          <a href="https://www.linkedin.com/in/fatima-anjum-80ba41308/" className="hover:text-fuchsia-300 transition-colors">
            <FaLinkedin />
          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; 2025 Fatima Anjum. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
