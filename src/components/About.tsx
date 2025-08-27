import React from 'react';
import { Download } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experience, skills } from '../data/portfolio';

const About: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate software engineer with 5+ years of experience building innovative web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <h3 className="text-2xl font-bold font-poppins text-gray-800 dark:text-white mb-8">
              My Journey
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`timeline-item border-l-2 border-accent pl-6 pb-8 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="timeline-dot absolute w-4 h-4 bg-accent rounded-full -left-2 top-0"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-accent font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio and Skills */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="mb-12">
              <h3 className="text-2xl font-bold font-poppins text-gray-800 dark:text-white mb-6">
                Who I Am
              </h3>
              <div className="prose prose-lg text-gray-700 dark:text-gray-300">
                <p className="mb-4">
                  I'm a passionate full-stack developer who loves creating digital experiences that make a difference. 
                  With over 5 years of experience in web development, I specialize in building scalable, user-centric 
                  applications using modern technologies.
                </p>
                <p className="mb-6">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community through blogging and mentoring.
                </p>
              </div>

              <a
                href="/resume.pdf"
                download
                className="pulse-button bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold font-poppins text-gray-800 dark:text-white mb-6">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`skill-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;