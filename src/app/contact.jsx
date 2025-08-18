"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen relative flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-16 overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 600, ease: "linear" }}
      >
        <div className="absolute w-96 h-96 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full top-10 left-10 opacity-30 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-tr from-pink-500 via-purple-400 to-blue-500 rounded-full bottom-10 right-20 opacity-30 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-tr from-green-400 via-blue-400 to-purple-500 rounded-full top-1/3 right-1/4 opacity-30 animate-pulse"></div>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-5xl md:text-6xl font-bold mb-4 text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-gray-300 text-lg md:text-xl mb-6 text-center max-w-2xl"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Whether you want to discuss a project, collaborate, or just say hello,  
        I’m always open to connecting. Let’s create something amazing together!
      </motion.p>

      {/* 📧 Email & 📞 Phone */}
      <motion.div
        className="w-full max-w-xl flex flex-col gap-2 text-center mb-10"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="text-xl">
          📧 Email:{" "}
          <a
            href="mailto:faridullah.dev01@gmail.com"
            className="text-purple-400 hover:underline"
          >
            faridullah.dev01@gmail.com
          </a>
        </p>

        <p className="text-xl">
          📞 Phone:{" "}
          <a
            href="tel:+923001234567"
            className="text-purple-400 hover:underline"
          >
            +92 349 4288200
          </a>
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-xl flex flex-col gap-6 bg-gray-800/80 p-8 rounded-2xl backdrop-blur-md shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        onSubmit={(e) => e.preventDefault()} // prevent refresh
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
