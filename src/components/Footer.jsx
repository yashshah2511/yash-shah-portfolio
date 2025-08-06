import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-white via-indigo-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-300 pt-10 pb-6 px-4 mt-20 shadow-inner transition duration-300">
      <div className="max-w-6xl mx-auto text-center">
        {/* Footer Heading */}
        <h2 className="text-3xl font-extrabold mb-2 tracking-wide bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text">
          Let’s Connect
        </h2>
        <p className="mb-6 text-sm md:text-base text-gray-600 dark:text-gray-400">
          Thanks for visiting my portfolio! Stay in touch through the links below.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-8 text-2xl md:text-3xl">
          <a
            href="https://github.com/yashshah2511"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg transition-all duration-300 group-hover:shadow-indigo-500/50 group-hover:scale-110">
              <FaGithub className="text-gray-800 dark:text-gray-300 group-hover:text-indigo-500" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/shahyash010"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg transition-all duration-300 group-hover:shadow-indigo-500/50 group-hover:scale-110">
              <FaLinkedin className="text-gray-800 dark:text-gray-300 group-hover:text-indigo-500" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/yashshah2511?igsh=N3Vxcm9laXdyb2Fo"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg transition-all duration-300 group-hover:shadow-pink-400/50 group-hover:scale-110">
              <FaInstagram className="text-gray-800 dark:text-gray-300 group-hover:text-pink-400" />
            </div>
          </a>
        </div>

        {/* Divider */}
        <div className="w-1/2 mx-auto border-t border-dashed border-indigo-400 dark:border-indigo-600 mb-4" />

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wide">
          &copy; {new Date().getFullYear()} <span className="font-medium">Yash Shah</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
