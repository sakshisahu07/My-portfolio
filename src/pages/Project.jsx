import React from 'react';
import ngo from '../assets/images/ngo.png';
import ngo1 from '../assets/images/ngo1.png';
import ecomm from '../assets/images/ecomm.png';

import guru from '../assets/videos/guru.mp4';
import deco from '../assets/videos/deco.mp4';
import ngoweb from '../assets/videos/ngoweb.mp4';

const ProjectsSection = () => {
  const imageProjects = [
    { src: ngo,  },
    { src: ngo1,  },
    { src: ecomm,  },
  ];

  const videoProjects = [
    { src: guru, title: "Guru-Matka" },
    { src: deco, title: "Decorative Items" },
    { src: ngoweb, title: "Ngo Live Project" },
  ];

  return (
    <section className="bg-black py-16 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Crafted with <span className="text-red-400">Love</span>
        </h2>
        <p className="mt-2 text-gray-300 text-lg">these are few of my recent works</p>
      </div>

      {/* Image Projects */}
      <div className=" flex flex-col md:flex-row justify-center gap-10 px-10  md:px-20  md:mb-16 ">
        {imageProjects.map((project, index) => (
          <div key={index} className="bg-white shadow-[0_0_20px_rgba(248,113,113,0.8)] rounded-lg overflow-hidden md:w-[80%]  ">
            <img src={project.src} alt={project.title} className="w-[100%] h-[100%] object-cover" />
            <div className="p-4 text-black font-semibold text-center">{project.title}</div>
          </div>
        ))}
      </div>

      {/* Video Projects */}
      <div className="flex flex-col md:flex-row justify-center gap-10 px-10 mt-10 md:mt-0 md:px-50  ">
        <video autoPlay muted loop controls className="md:w-[40%] shadow-lg shadow-amber-300 rounded-lg object-cover">
  <source src={guru} type="video/mp4" />
  Your browser does not support the video tag.
</video>
<video autoPlay muted loop controls className="md:w-[40%] rounded-lg object-cover">
  <source src={deco} type="video/mp4" />
  Your browser does not support the video tag.
</video>
<video autoPlay muted loop controls className="md:w-[40%]  rounded-lg object-cover">
  <source src={ngoweb} type="video/mp4" />
  Your browser does not support the video tag.
</video>

      </div>
    </section>
  );
};

export default ProjectsSection;
