import React from "react";
import { ArrowDownCircle } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import developer from "../assets/images/profile-pic.png";
import resumePDF from "../assets/files/yash-shah-resume.pdf"; // your PDF path

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-black px-4 md:px-8 transition duration-500"
    >
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 opacity-20 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 opacity-20 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>

      {/* Main Container */}
      <div className="z-10 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-gray-800 dark:text-white animate-fadeIn">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Yash Shah
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-slideUp">
            Aspiring Data Scientist | Backend Developer | Machine Learning | Research Enthusiast
          </p>

          <p className="mt-3 text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed animate-slideUp delay-75">
            I specialize in building scalable backend systems using Node.js and Express, with proven experience working across the MERN and MEAN stacks to deliver seamless full-stack applications.
            With hands-on experience in Django and ASP.NET MVC, I have also taught these frameworks as a visiting faculty.
            As a research paper author on the Metaverse, I bring a strong blend of development, leadership, and innovation to every project.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex gap-6 justify-center md:justify-start text-2xl text-gray-700 dark:text-gray-300">
            <a
              href="https://www.linkedin.com/in/shahyash010"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yashshah2511"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/yashshah2511?igsh=N3Vxcm9laXdyb2Fo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Resume Button */}
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              download="Yash_Shah_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow hover:scale-105 transition"
            >
              📄 View Resume
            </a>

            {/* About Page Button */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold rounded-full hover:bg-indigo-100 dark:hover:bg-gray-800 transition"
            >
              👨‍💻 About Me
            </Link>
          </div>

        </div>

        {/* Image Section */}
        <div className="relative w-60 h-60 md:w-80 md:h-80 bg-white dark:bg-gray-800 rounded-full shadow-2xl overflow-hidden border-4 border-indigo-400 animate-slideUpSlow">
          <img
            src={developer}
            alt="Yash Shah Developer"
            className="object-cover w-full h-full scale-110 hover:scale-100 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
