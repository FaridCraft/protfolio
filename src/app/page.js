"use client";
import "./globals.css";
import Image from "next/image";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { useState } from "react";
import ContactSection from './contact';



export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth-scroll + close menu
  const handleNavClick = (hash) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (hash === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };


  
  return (
    <div className="scroll-smooth">


      {/* Navbar */}
      <div className="scroll-smooth">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white px-6 md:px-8 py-4 shadow-md flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl text-blue-600 font-extrabold tracking-wide">
            Farid.Dev
          </h1>

          {/* Desktop links - centered */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <ul className="flex space-x-8 text-lg font-medium">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Mobile hamburger (right) */}
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>

        {/* Mobile menu dropdown (top-right) */}
        {menuOpen && (
          <div className="md:hidden fixed top-16 right-4 z-[60] bg-black/90 text-white rounded-lg shadow-lg px-6 py-4 max-h-[70vh] overflow-y-auto">
            <ul className="space-y-4 text-lg font-medium">
              <li><a href="#home" onClick={handleNavClick("#home")} className="hover:text-blue-400">Home</a></li>
              <li><a href="#about" onClick={handleNavClick("#about")} className="hover:text-blue-400">About</a></li>
              <li><a href="#projects" onClick={handleNavClick("#projects")} className="hover:text-blue-400">Projects</a></li>
              <li><a href="#skills" onClick={handleNavClick("#skills")} className="hover:text-blue-400">Skills</a></li>
              <li><a href="#contact" onClick={handleNavClick("#contact")} className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
        )}
      </div>



      <main className="relative">
        {/* Hero Section with Background Video */}
        <section
          id="home"
          className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          >
            <source src="/videos/bgvideo.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-5"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6 pt-28 md:pt-32">
            {/* Left: Text */}
            <motion.div
              className="w-full md:w-1/2 text-left"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I’m <span className="text-blue-600">Farid Ullah</span>
              </h1>
              <p className="mt-4 text-lg md:text-2xl text-gray-200">
                Software Engineer | Full-Stack Developer
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="#projects"
                  className="px-5 py-3 rounded-4xl bg-blue-600 hover:bg-blue-500 text-white transition"
                >
                  View My Work
                </a>


                <a
                  href="https://www.linkedin.com/in/farid-ullah-12125634a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-23"
                >
                  <span className="text">LinkedIn</span>
                  <span aria-hidden className="marquee">Visit ME</span>
                </a>



                {/*  */}

              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center md:justify-end"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-blue-500/60 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/mypic.jpg"
                  alt="Farid Ullah"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen relative flex flex-col items-center justify-start bg-gray-900 text-white py-16 px-6 overflow-hidden w-full"
        >
          {/* Background floating shapes */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full -z-10"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 300, ease: "linear" }}
          >
            <div className="absolute w-60 h-60 bg-blue-600/20 rounded-full top-16 left-10 animate-pulse"></div>
            <div className="absolute w-40 h-40 bg-purple-500/20 rounded-full bottom-16 right-16 animate-pulse"></div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-12 text-center"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
            {/* Text Content */}
            <div className="space-y-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              <motion.p
                className="leading-relaxed"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                I am{" "}
                <span className="text-blue-400 font-semibold">Farid Ullah</span>
                , a passionate Full-Stack Developer with expertise in building
                modern web applications using{" "}
                <span className="font-semibold text-teal-400">
                  React, Next.js, and Python
                </span>
                .
              </motion.p>

              <motion.p
                className="leading-relaxed"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                My focus is on writing{" "}
                <span className="font-semibold text-blue-400">
                  clean, maintainable code
                </span>{" "}
                and creating{" "}
                <span className="font-semibold text-green-400">
                  user-friendly experiences
                </span>
                . I also enjoy exploring new technologies to make projects more
                innovative and efficient.
              </motion.p>

              <motion.p
                className="leading-relaxed"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                In my free time, I contribute to open-source projects, learn new
                frameworks, and experiment with creative web designs to stay
                ahead in the ever-evolving world of development.
              </motion.p>
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Experience",
                  icon: "💻",
                  desc: "1+ years building full-stack web apps and APIs.",
                },
                {
                  title: "Full Stuck Web App",
                  icon: "👨‍💻",
                  desc: "Building modern web applications using React, Next.js, and Python.",
                },
                {
                  title: "Education",
                  icon: "🎓",
                  desc: "Currently studying ICS, 12th year, focusing on computer science fundamentals.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-2 text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-12 flex gap-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition"
            >
              View My Projects
            </a>
            <a
              href="https://github.com/FaridCraft"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition"
            >
              GitHub
            </a>
          </motion.div>
        </section>



        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen relative flex flex-col items-center justify-center bg-gray-800 text-white px-6 py-16 overflow-hidden"
        >
          {/* Background floating shapes */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full -z-10"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 300, ease: "linear" }}
          >
            <div className="absolute w-60 h-60 bg-blue-600/20 rounded-full top-16 left-10 animate-pulse"></div>
            <div className="absolute w-40 h-40 bg-purple-500/20 rounded-full bottom-16 right-16 animate-pulse"></div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-12 text-center"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.h2>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            
            {[
              {
                title: "Portfolio Website",
                desc: "A professional portfolio built with Next.js, React, and TailwindCSS — high lighting my expertise, skills, and real-world projects.",
                tech: ["React", "Next.js", "TailwindCSS"],
                github: "https://github.com/FaridCraft",
                demo: "faridullah-protfolio.netlify.app",
              },
              {
                title: "Colculator",
                desc: "A sleek dark-themed calculator built with HTML, CSS, and JavaScript that supports basic arithmetic operations with a modern UI.",
                tech: ["Python", "FastAPI", "JavaScript"],
                github: "https://github.com/FaridCraft",
                demo: "my-demoo.netlify.app

",
              },
              {
                title: "Login & Signup Form with Validation",
                desc: "A stylish login and signup form with background image, form validation, and password confirmation using HTML, CSS, and JavaScript.",
                tech: ["HTML", "CSS","JavaScript"],
                github: "https://github.com/FaridCraft",
                demo: "http://127.0.0.1:5500/Js-1-login/sigin.html",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-900/50 rounded-xl p-6 shadow-lg flex flex-col justify-between cursor-pointer overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 opacity-20 blur-xl scale-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-40 pointer-events-none"></div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <h3 className="text-2xl font-semibold mb-2 transition-transform duration-300 group-hover:translate-y-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 transition-transform duration-300 group-hover:translate-y-1">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-600/30 text-blue-400 px-3 py-1 rounded-full text-sm transition-all duration-300 group-hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition transform hover:-translate-y-1 hover:scale-105"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-md transition transform hover:-translate-y-1 hover:scale-105"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Glowing Lines */}
                <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 opacity-50 blur-lg animate-[pulse_2s_infinite]"></span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 blur-lg animate-[pulse_2s_infinite]"></span>
              </motion.div>
            ))}
          </div>
        </section>

{/* skill Section */}
        <section
          id="skills"
          className="min-h-screen relative flex flex-col items-center justify-center bg-gray-850 text-white px-6 py-16 overflow-hidden"
        >
          {/* Background floating circles animation */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full -z-10"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
          >
            <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full top-20 left-10 animate-pulse"></div>
            <div className="absolute w-52 h-52 bg-purple-500/20 rounded-full bottom-20 right-20 animate-pulse"></div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-12 text-center"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Skills
          </motion.h2>

        {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
            {[
              { name: "HTML", percent: 99, color: "bg-orange-500" },
              { name: "CSS", percent: 98, color: "bg-blue-500" },
              { name: "JavaScript", percent: 95, color: "bg-yellow-400" },
              { name: "React.js", percent: 85, color: "bg-cyan-500" },
              { name: "Next.js", percent: 80, color: "bg-purple-500" },
              { name: "Tailwind CSS", percent: 85, color: "bg-teal-500" },
              { name: "Python", percent: 95, color: "bg-green-500" },
              { name: "FastAPI", percent: 70, color: "bg-blue-700" },
              { name: "MySQL", percent: 70, color: "bg-red-500" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <span className="text-gray-300 font-medium">
                    {skill.percent}%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`${skill.color} h-3 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>












{/* Contact Section */}
    <ContactSection/>

      </main>


        {/* Footer section */}

       <footer className="bg-black text-gray-300 py-10 px-6 md:px-16 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Name / Logo */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Farid Ullah
        </h2>
        <p className="text-gray-400 mb-6">
          Full-Stack Developer | Next.js | React | TailwindCSS
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/FaridCraft/"
            target="_blank"
            className="text-gray-300 hover:text-white text-2xl"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/farid-ullah-12125634a"
            target="_blank"
            className="text-gray-300 hover:text-white text-2xl"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://twitter.com/"
            target="_blank"
            className="text-gray-300 hover:text-white text-2xl"
          >
            <FaTwitter />
          </motion.a>
        </div>

        {/* Bottom text */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Farid Ullah. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
    </div>
  );
}
