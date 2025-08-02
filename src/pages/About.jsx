import React from "react";
import { motion } from "framer-motion";
import yashImage from "../assets/images/profile-pic.png"; // Your actual image

const About = () => {
  const technicalSkills = [
    "ReactJS", "AngularJS", "Node.js", "ExpressJS", "MongoDB",
    "Django", "DotNet MVC", "Tailwind CSS", "JavaScript", "Python",
    "C/C++", "Java", "SQL", "Git", "Firebase"
  ];

  const softSkills = [
    "Quick Adaptability",
    "Problem Solving",
    "Team Management",
    "Content Delivery",
    "Leadership"
  ];

  const certifications = [
    { title: "Research Paper: Metaverse Demystified", org: "IFERP (ICRAECA)", year: "Feb 2025" },
    
  ];

  const education = [
    { title: "MSc IT", inst: "LJ Institute of Computer Applications", year: "2025 - Present" },
    { title: "BSc IT", inst: "LJ Institute of Computer Applications", year: "2021 - 2024" },
  ];

  const experience = [
    { role: "Visiting Faculty – ASP.NET MVC", company: "LJICA", year: "Jan 2025" },
    { role: "Visiting Faculty – Django", company: "LJSCA", year: "Jul 2024" },
  ];

  return (
    <section id="about" className="min-h-screen px-6 py-20 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-200">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <img src={yashImage} alt="Yash Shah" className="rounded-2xl shadow-lg w-full" />
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gradient">Hi, I'm Yash Shah</h2>
            <p className="text-lg leading-relaxed">
              I'm an MSc IT student and passionate backend developer focused on building secure, scalable web applications. Proficient in MERN and MEAN stacks, I also teach technologies like ASP.NET MVC and Django as a visiting faculty.
              I'm currently researching Metaverse security and have presented papers at academic conferences. With a strong foundation in system architecture and a creative problem-solving mindset, I bring clarity and innovation to every project I undertake.
            </p>
            <a href="/#projects" className="inline-block mt-6 px-6 py-3 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 shadow transition">View Projects</a>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-3xl font-bold mb-6">🎓 Education</h3>
          <div className="border-l-4 border-indigo-500 pl-6 space-y-6">
            {education.map((edu, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.2 }}>
                <h4 className="text-xl font-semibold">{edu.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{edu.inst} — <span className="italic">{edu.year}</span></p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">🧠 Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="bg-indigo-100 dark:bg-indigo-900 text-center py-3 rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">💡 Soft Skills</h3>
            <ul className="space-y-4 list-disc list-inside text-lg">
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

        {/* Experience Timeline */}
        <div>
          <h3 className="text-3xl font-bold mb-6">💼 Experience</h3>
          <div className="border-l-4 border-purple-500 pl-6 space-y-6">
            {experience.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.2 }}>
                <h4 className="text-xl font-semibold">{exp.role}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company} — <span className="italic">{exp.year}</span></p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research & Certifications */}
        <div>
          <h3 className="text-3xl font-bold mb-6">📜 Research & Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.2 }}>
                <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{cert.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.org} — <span>{cert.year}</span></p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
