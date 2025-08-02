import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition duration-300"
    >
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
