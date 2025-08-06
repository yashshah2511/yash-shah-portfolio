import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projImg from "../assets/images/profile-pic.png"; // Add more as needed
import projImg2 from "../assets/images/skyway.png"; // Add more as needed
import projImg3 from "../assets/images/skillswap.png"; // Add more as needed
import projImg4 from "../assets/images/Payment-Fraud-Detection_Overgraph.jpg"; // Add more as needed

const projects = [
  {
    image: projImg2,
    title: "Flight Management System",
    description: "A full-stack MERN application to manage airline bookings and schedules.",
    link: "https://github.com/yashshah2511/skyway",
  },
  {
    image: projImg3,
    title: "Skill-Swap",
    description: "",
    link: "https://github.com/arnoldhere/Skill-Swap",
  },
  {
    image: projImg4,
    title: "fraud detection on online payment method",
    description: "",
    link: "https://github.com/yashshah2511/Fraud_Detection_On_Online_Payment",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-black text-gray-800 dark:text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4">My Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Here are some of the projects I’ve built with love, logic, and lots of coffee.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
