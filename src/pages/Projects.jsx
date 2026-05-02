import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projImg from "../assets/images/profile-pic.png"; // Add more as needed
import projImg2 from "../assets/images/skyway.png"; // Add more as needed
import skillswap from "../assets/images/skillswap.jpeg"; // Add more as needed
import projImg4 from "../assets/images/Payment-Fraud-Detection_Overgraph.jpg"; // Add more as needed
import projImg5 from "../assets/images/swapzone.jpeg"; // Add more as needed
import neurohire from "../assets/images/neurohire.jpeg"; // Add more as needed
import creditcarddl from "../assets/images/credit_card_dl.jpeg"
import employeetracker from "../assets/images/employee_tracker.jpeg"
import fashionmnist from "../assets/images/fashion_mnist.jpeg"
import nyctaxi from "../assets/images/nyctaxi.jpeg"

const projects = [
   {
    image: neurohire,
    title: "NeuroHire - AI-Powered Recruitment Platform",
    description: "AI-powered resume screening and candidate evaluation system.",
    link: "https://github.com/yashshah2511/Neurohire",
  },
   {
    image: creditcarddl,
    title: "Credit Card Fraud Detection using Deep Learning",
    description: "Detecting suspicious and fraudulent transactions using deep learning models.",
    link: "https://github.com/yashshah2511/Credit-Card-Fraud-Detection-using-Deep-Learning",
  },
   {
    image: employeetracker,
    title: "Employee Tracker - Real-Time Object Detection & Tracking",
    description: "Detecting employees using YOLO-based object detection.",
    link: "https://github.com/yashshah2511/real-time-employee-tracking",
  },

  {
    image: fashionmnist,
    title: "Fashion MNIST Classification using Deep Learning",
    description: "Predicting clothing categories using deep learning models.",
    link: "https://github.com/yashshah2511/Fashion-mnist#fashion-mnist-classification-using-deep-learning",
  },
  {
    image: nyctaxi,
    title: "NYC taxi fare prediction",
    description: "Predicting taxi trip duration using machine learning based on real-world data.",
    link: "https://github.com/yashshah2511/nyc-taxi-trip-prediction",
  },
  
  {
    image: skillswap,
    title: "Skill-Swap",
    description: "Real-time communication between users for seamless skill exchange.",
    link: "https://github.com/arnoldhere/Skill-Swap",
  },
  {
    image: projImg4,
    title: "fraud detection on online payment method",
    description: "Detecting fraudulent transactions in real-time.",
    link: "https://github.com/yashshah2511/Fraud_Detection_On_Online_Payment",
  },
  {
    image: projImg5,
    title: "swapzone",
    description: "A platform for exchanging skills and knowledge.",
    link: "https://github.com/yashshah2511/swapzone",
  },
  {
    image: projImg2,
    title: "Flight Management System",
    description: "A full-stack MERN application to manage airline bookings and schedules.",
    link: "https://github.com/yashshah2511/skyway",
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
