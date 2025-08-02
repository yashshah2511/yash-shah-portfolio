import React from "react";
import { ArrowDownCircle } from "lucide-react";
import developer from "../assets/images/profile-pic.png";

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
            MSc IT Student • Backend Developer • Researcher • Faculty Mentor
          </p>

          <p className="mt-3 text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed animate-slideUp delay-75">
            I specialize in building scalable backend systems using Node.js and Express,
            and delivering seamless frontend experiences using React and Angular.
            With hands-on experience teaching ASP.NET MVC and Django, and active involvement
            in research on the Metaverse, I bring a strong mix of development, leadership,
            and innovation to every project.
          </p>

          <ul className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400 space-y-2 animate-slideUp delay-100">
            <li>✅ Developed full-stack projects like <b>Skyway</b> and <b>SkillSwap</b> using MERN & MEAN</li>
            <li>🎓 Visiting Faculty for ASP.NET MVC and Django at LJ Institute</li>
            <li>📚 Research Paper Presented at IFERP | Under Review for WOS Journal</li>
            <li>🛠️ Proficient in Node.js, React, MongoDB, Express, Python & ML</li>
          </ul>

          {/* CTA Button */}
          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-indigo-600 transform transition duration-300 animate-fadeIn delay-200"
          >
            View My Work <ArrowDownCircle size={20} />
          </a>
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
