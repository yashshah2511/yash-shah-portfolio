import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message ❌");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6 w-full">
      <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input
          type="text"
          name="user_name"
          required
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input
          type="email"
          name="user_email"
          required
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Write your message"
          className="w-full px-4 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
      >
        {loading ? "Sending..." : "Send Message ✉️"}
      </button>
    </form>
  );
};

export default ContactForm;