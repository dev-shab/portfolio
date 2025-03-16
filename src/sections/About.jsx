import React from "react";
import { BACKEND_SKILLS, FRONTEND_SKILLS } from "../utils/constants";
import RevealOnScroll from "../components/RevealOnScroll";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              A passionate Full Stack Developer with 5 years of experience in
              React and TypeScript. Skilled in building scalable web
              applications using MongoDB, Express, and Node.js. Dedicated to
              writing clean code and creating seamless user experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {FRONTEND_SKILLS.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {BACKEND_SKILLS.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>BTech in Computer Science and Engineering</strong> -
                  Amrita Vishwa Vidyapeetham (2016 - 2020)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Senior Software Engineer at Capgemini (2024 - Present)
                  </h4>
                  <p>
                    Leading front-end development, mentoring juniors, and
                    building large-scale MERN applications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Software Engineer at Oracle Cerner (2020 - 2024)
                  </h4>
                  <p>
                    Driving scalable React applications, optimizing performance,
                    and enhancing code quality while mentoring developers and
                    improving development workflows.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Software Intern at Oracle Cerner (2020)
                  </h4>
                  <p>
                    Gained hands-on experience in agile development, end-to-end
                    React-on-Rails projects, and essential tools like JIRA, Git,
                    and Jenkins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
