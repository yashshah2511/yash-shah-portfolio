import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import yashImage from "../assets/images/profile-pic.png";

const About = () => {
  const languages = ["C/C++", "C#", "Python", "Java", "JavaScript"];
  const databases = ["SQL", "MongoDB"];
  const frameworks = [
    "ExpressJS",
    "NodeJS",
    "AngularJS",
    "DotNet MVC",
    "Django",
    "ReactJS",
  ];

  const softSkills = [
    "Quick Adaptability",
    "Problem Solving",
    "Team Management",
    "Content Delivery",
    "Leadership",
  ];

  const education = [
    {
      title: "TOPS Technologies (Internship)",
      inst: "Backend & Data Science Training",
      year: "2025",
    },
    {
      title: "MSc IT",
      inst: "LJ Institute of Computer Applications",
      year: "2025 - Present",
    },
    {
      title: "BSc IT",
      inst: "LJ Institute of Computer Applications",
      year: "2021 - 2024",
    },
    { title: "HSC (12th)", inst: "Swaminarayan School", year: "2019 - 2021" },
    { title: "SSC (10th)", inst: "Jeevan Bharti School", year: "2018 - 2019" },
  ];

  const experience = [
    {
      role: "Visiting Faculty – ASP.NET MVC",
      company: "LJICA",
      year: "Jan 2025",
      desc: "Conducted lectures and hands-on labs on ASP.NET MVC for postgraduate students. Focused on real-time application development and backend integration.",
    },
    {
      role: "Visiting Faculty – Django",
      company: "LJSCA",
      year: "Jul 2024",
      desc: "Delivered project-based learning sessions on Django Framework. Guided students in building full-stack web apps with authentication, APIs, and ORM.",
    },
  ];

  const research = {
    title: "Research Paper: Metaverse Demystified",
    org: "IFERP (ICRAECA)",
    year: "Feb 2025",
    desc: "Presented a paper exploring the opportunities and risks of the Metaverse in digital transformation. Focused on immersive technologies, security challenges, and user experience in virtual environments.",
  };

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <img
            src={yashImage}
            alt="Yash Shah"
            className="rounded-2xl shadow-lg w-full"
          />
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              Hi, I'm Yash Shah
            </h2>
            <p className="text-lg leading-relaxed">
              I'm an MSc IT student and passionate backend developer focused on
              building secure, scalable web applications. Proficient in MERN and
              MEAN stacks, I also teach technologies like ASP.NET MVC and Django
              as a visiting faculty. I'm currently researching Metaverse
              security and have presented papers at academic conferences.
            </p>
            <Link
              to="/projects"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 shadow transition"
            >
              View Projects
            </Link>
          </div>
        </motion.div>

        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Education Timeline with continuous line and dots on top */}
<div>
  <h3 className="text-3xl font-bold mb-6">🎓 Education</h3>
  <div className="relative ml-5 pl-6 border-l-2 border-indigo-500 dark:border-indigo-400">
    {education.map((edu, i) => (
      <motion.div
        key={i}
        className="relative mb-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
      >
        {/* Dot on the continuous line */}
        <span className="absolute -left-[14px] top-1 w-3.5 h-3.5 bg-indigo-500 rounded-full border-2 border-white dark:border-gray-900 z-10"></span>

        <h4 className="text-xl font-semibold">{edu.title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {edu.inst} — <span className="italic">{edu.year}</span>
        </p>
      </motion.div>
    ))}
  </div>
</div>


        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Technical + Soft Skills Side by Side */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">🧠 Technical Skills</h3>

            {/* Languages */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Databases</h4>
              <div className="flex flex-wrap gap-3">
                {databases.map((db, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow"
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h4 className="text-xl font-semibold mb-3">Frameworks</h4>
              <div className="flex flex-wrap gap-3">
                {frameworks.map((fw, i) => (
                  <span
                    key={i}
                    className="bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-3xl font-bold mb-6">💡 Soft Skills</h3>
            <ul className="space-y-4 text-lg list-disc list-inside">
              {softSkills.map((skill, i) => (
                <motion.li
                  key={i}
                  className="text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Experience Timeline with continuous line and dots on top */}
<div>
  <h3 className="text-3xl font-bold mb-6">💼 Experience</h3>
  <div className="relative ml-5 pl-6 border-l-2 border-purple-500 dark:border-purple-400">
    {experience.map((exp, i) => (
      <motion.div
        key={i}
        className="relative mb-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
      >
        {/* Dot on the continuous line */}
        <span className="absolute -left-[14px] top-1 w-3.5 h-3.5 bg-purple-500 rounded-full border-2 border-white dark:border-gray-900 z-10"></span>

        <h4 className="text-xl font-semibold">{exp.role}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          {exp.company} — <span className="italic">{exp.year}</span>
        </p>
        <p className="text-gray-700 dark:text-gray-300">{exp.desc}</p>
      </motion.div>
    ))}
  </div>
</div>


        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Research */}
        <div>
          <h3 className="text-3xl font-bold mb-6">📜 Research</h3>
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              {research.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {research.org} — <span>{research.year}</span>
            </p>
            <p className="text-gray-700 dark:text-gray-300">{research.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
