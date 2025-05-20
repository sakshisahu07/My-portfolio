import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";
import mongodb from "../assets/images/mongodb.png";
import github from "../assets/images/github.png";
import bootstrap from "../assets/images/bootstrap.png";
gsap.registerPlugin(ScrollTrigger); 
const skills = [
  { src: html, alt: "Next.js" },
  { src: css, alt: "React" },
  { src: react, alt: "Node.js" },
  { src: tailwind, alt: "HTML5" },
  { src: js, alt: "CSS3" },
  { src: node, alt: "JavaScript" },
  { src: express, alt: "MongoDB" },
  { src: mongodb, alt: "Express.js" },
  { src: github, alt: "GitHub" },
  { src: bootstrap, alt: "Bootstrap" },
];

const SkillsSection = () => {
  const textleft = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textleft.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textleft.current,
          start: "top 80%", 
          toggleActions: "play none none reverse", 
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#1a1a1a] py-16 px-6 text-white text-start">
      <h2 ref={textleft} className="text-4xl md:text-[4rem] font-bold mb-4">
        Things I'm <span className="text-red-400">good</span> at
      </h2>
      <p className="text-lg md:text-[2rem] mb-10 font-bold text-white">
        skills, interests and passion
      </p>

      <button className="border border-white text-[1.5rem] px-10 font-semibold py-2 rounded-md mb-10">
        development
      </button>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <img
            key={index}
            src={skill.src}
            alt={skill.alt}
            className="w-12 h-12 md:w-25 md:h-25 hover:scale-110 transition-transform duration-300 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
