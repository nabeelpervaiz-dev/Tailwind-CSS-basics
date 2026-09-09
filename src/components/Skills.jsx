import React from "react";

import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFramer, SiGreensock } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-500",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
    color: "text-black",
  },
  {
    name: "GSAP",
    icon: <SiGreensock />,
    color: "text-green-500",
  },
  {
    name: "Git & GitHub",
    icon: (
      <div className="flex items-center gap-2">
        <FaGitAlt />
        <FaGithub />
      </div>
    ),
    color: "text-orange-600",
  },
];

function Skills() {
  return (
    <section className="min-h-screen w-full bg-white px-5 sm:px-8 lg:px-16 py-20">

      {/* Heading */}
      <div className="text-center mb-12">

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
          My Skills
        </h2>

        <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
          Technologies and tools I use to build modern web experiences.
        </p>

      </div>


      {/* Skills Grid */}
      <div className="
        max-w-5xl
        mx-auto
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        gap-4
        sm:gap-6
      ">

        {skills.map((skill) => (

          <div
            key={skill.name}
            className="
              group
              min-h-[150px]
              sm:min-h-[170px]
              flex
              flex-col
              items-center
              justify-center
              gap-4
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              shadow-sm
              hover:bg-white
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >

            {/* Icon */}
            <div
              className={`
                ${skill.color}
                text-5xl
                sm:text-6xl
                group-hover:scale-110
                transition-transform
                duration-300
              `}
            >
              {skill.icon}
            </div>


            {/* Name */}
            <h3 className="
              text-sm
              sm:text-base
              md:text-lg
              font-semibold
              text-gray-800
              text-center
              px-2
            ">
              {skill.name}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;