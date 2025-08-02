import React from "react";

const ContactForm = () => {
  return (
    <form className="space-y-6 w-full">
      <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Message</label>
        <textarea
          placeholder="Write your message"
          rows={5}
          className="w-full px-4 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
      >
        Send Message ✉️
      </button>
    </form>
  );
};

export default ContactForm;
