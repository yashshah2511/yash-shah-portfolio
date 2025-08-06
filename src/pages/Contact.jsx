import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { toast } from "react-toastify";

const Contact = () => {
  // Show toast once when the component mounts
  useEffect(() => {
    toast.info(" This page is under developing phase", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }, []);

  return (
    <motion.section
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-200 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-purple-300 opacity-30 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-indigo-300 opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-text">
          Let's Connect
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
      </div>

      {/* Two-Column Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        {/* Left Column: Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">📍 Address</h3>
            <p className="text-gray-700 dark:text-gray-300">
              SwapZone HQ,<br />
              Khanpur, Ahmedabad, Gujarat,<br />
              India - 380001
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">📧 Email</h3>
            <p className="text-gray-700 dark:text-gray-300">yashshah.dev@gmail.com</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">💬 Message from Me</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I’m always open to discussing creative projects, internships, or collabs.
              Let’s build something awesome together! 🚀
            </p>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
          <ContactForm />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
