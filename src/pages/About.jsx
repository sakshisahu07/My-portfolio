import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHandsClapping } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger);

const ScrollName = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: 0 },
      {
        x: "-100%",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        ease: "none",
      }
    );
  }, []);
  

  return (
    <div className="bg-black">
      <div className="h-[10rem] md:h-[20rem] md:mt-10 flex items-center overflow-hidden">
        <h1
          ref={textRef}
          className="text-[3rem] md:text-[10rem] whitespace-nowrap font-bold text-white"
        >
          Sakshi Sahu? &nbsp; Sakshi Sahu? &nbsp; Sakshi Sahu? &nbsp; Sakshi
          Sahu?
        </h1>
      </div>

      {/* ✅ This div was incorrectly placed earlier */}
      <div className="md:mt-10 font-bold px-4 md:px-20 lg:px-40 text-center text-white">
  <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-snug mb-6">
    <span>Hi!</span> <br />
    I'm Sakshi, a <span className="text-red-400">Full Stack Developer</span>{" "}
    with a strong focus on React.js.
    <span className="text-red-400"> Currently, </span>I'm working as a React
    Developer at{" "}
    <span className="text-red-400">Satya Kabir E-Solution,</span> where I
    contribute to live projects and build dynamic, user-friendly interfaces.
    <br />
    <br />I specialize in{" "}
    <span className="text-red-400">building responsive </span>frontends using
    React and <span className="text-yellow-200">managing state</span>{" "}
    efficiently. With experience in
    <span className="text-red-400"> both frontend</span> and backend technologies{" "}
    <span className="text-yellow-200">(MERN Stack),</span> I love turning ideas
    into scalable web applications.
  </h1>

  <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6 mb-20">
    <button
      onClick={() =>
        window.open("https://www.instagram.com/sakshi__sahu007/", "_blank")
      }
      className="bg-yellow-200 flex items-center justify-center gap-2 rounded-full px-8 py-3 font-bold text-[1rem] sm:text-[1.1rem] text-black hover:scale-105 transition"
    >
      Say Hi
      <FaHandsClapping size={24} />
    </button>

    <button
      onClick={() =>
        window.open("https://github.com/sakshisahu07", "_blank")
      }
      className="bg-red-500 flex items-center justify-center gap-2 rounded-full px-8 py-3 font-bold text-[1rem] sm:text-[1.1rem] text-white hover:scale-105 transition"
    >
      Watch my repo
      <IoLogoGithub size={24} />
    </button>
  </div>
</div>
    </div>
  );
};

export default ScrollName;
