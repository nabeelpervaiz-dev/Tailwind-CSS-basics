import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Feedback from ${formData.name}`;

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Feedback:
${formData.message}
    `;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nabeelpervaiz.dev@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <footer className="w-full bg-black text-white px-6 sm:px-10 lg:px-20 py-16">

      {/* Main Footer */}
      <div className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12
      ">

        {/* Left Side */}
        <div className="flex flex-col justify-center">

          <p className="text-red-500 font-medium mb-3">
            GET IN TOUCH
          </p>

          <h2 className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
          ">
            Let's work
            <br />
            together.
          </h2>

          <p className="
            mt-6
            text-gray-400
            max-w-md
            text-base
            sm:text-lg
          ">
            Have a project, idea, or feedback? I'd love to hear from you.
            Send me a message and let's connect.
          </p>

          {/* Email */}
          <a
            href="mailto:nabeelpervaiz.dev@gmail.com"
            className="
              flex
              items-center
              gap-3
              mt-8
              text-gray-300
              hover:text-white
              transition
              w-fit
            "
          >
            <Mail size={20} />
            nabeelpervaiz.dev@gmail.com
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">

            <a
              href="https://github.com/nabeelpervaiz-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-3
                rounded-full
                bg-gray-900
                hover:bg-red-500
                transition
              "
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-3
                rounded-full
                bg-gray-900
                hover:bg-red-500
                transition
              "
            >
            <FaLinkedin size={20} />
            </a>

          </div>
        </div>


        {/* Feedback Form */}
        <div className="
          bg-gray-900
          rounded-3xl
          p-6
          sm:p-8
          lg:p-10
        ">

          <h3 className="text-2xl sm:text-3xl font-semibold">
            Send Feedback
          </h3>

          <p className="text-gray-400 mt-2 mb-8">
            Your feedback is always appreciated.
          </p>


          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-black
                  border
                  border-gray-700
                  text-white
                  outline-none
                  focus:border-red-500
                  transition
                "
              />
            </div>


            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-black
                  border
                  border-gray-700
                  text-white
                  outline-none
                  focus:border-red-500
                  transition
                "
              />
            </div>


            {/* Message */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Feedback
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your feedback..."
                rows="5"
                required
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-black
                  border
                  border-gray-700
                  text-white
                  outline-none
                  resize-none
                  focus:border-red-500
                  transition
                "
              />
            </div>


            {/* Submit */}
            <button
              type="submit"
              className="
                w-full
                py-3
                bg-red-500
                hover:bg-red-600
                text-white
                rounded-xl
                flex
                items-center
                justify-center
                gap-2
                font-medium
                cursor-pointer
                transition
              "
            >
              Send Feedback
              <Send size={18} />
            </button>

          </form>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="
        max-w-6xl
        mx-auto
        border-t
        border-gray-800
        mt-16
        pt-6
        flex
        flex-col
        sm:flex-row
        justify-between
        items-center
        gap-4
        text-sm
        text-gray-500
      ">

        <p>
          © {new Date().getFullYear()} Nabeel Pervaiz. All rights reserved.
        </p>

        <a
          href="#top"
          className="
            flex
            items-center
            gap-2
            hover:text-white
            transition
          "
        >
          Back to top
          <ArrowUpRight size={16} />
        </a>

      </div>

    </footer>
  );
};

export default Footer;