import React from 'react';

const experiences = [
  {
    title: 'React Developer Intern',
    organization: 'Satya Kabir e-solutions',
    duration: 'Jan 2025 - Present',
    description:
      'Working on live projects using React.js, Redux Toolkit, and RTK Query. Built multiple modules and handled API integrations.',
  },
  {
    title: 'MERN Stack Developer (Course)',
    organization: 'Cybrom Technology',
    duration: '2024',
    description:
      'Completed full MERN stack development course including MongoDB, Express.js, React.js, and Node.js. Built multiple full-stack projects.',
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          My <span className="text-red-500">Experience</span>
        </h2>
        <p className="text-gray-300 mt-2 text-lg">what I’ve done so far</p>
      </div>

      <div className="space-y-10 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-[0_0_15px_rgba(239,68,68,0.6)]"
          >
            <h3 className="text-2xl font-semibold text-red-400">{exp.title}</h3>
            <p className="text-gray-400">
              <span className="font-medium text-white">{exp.organization}</span> — {exp.duration}
            </p>
            <p className="mt-3 text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
