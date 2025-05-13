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
      <div className="h-[20rem] mt-10 flex items-center overflow-hidden">
        <h1
          ref={textRef}
          className="text-[10rem] whitespace-nowrap font-bold text-white"
        >
          Sakshi Sahu? &nbsp; Sakshi Sahu? &nbsp; Sakshi Sahu? &nbsp; Sakshi
          Sahu?
        </h1>
      </div>

      {/* ✅ This div was incorrectly placed earlier */}
      <div className=" mt-10 font-bold px-30 text-center text-white text-[4rem] ">
        <span className="">Hi!</span> <br />
        I'm Sakshi, a <span className="text-red-400">
          Full Stack Developer
        </span>{" "}
        with a strong focus on React.js.
        <span className="text-red-400"> Currently, </span>I'm working as a React
        Developer at{" "}
        <span className="text-red-400">Satya Kabir E-Solution,</span> where I
        contribute to live projects and build dynamic, user-friendly interfaces.
        <br />
        <br />I specialize in{" "}
        <span className="text-red-400">building responsive </span>frontends
        using React and <span className="text-yellow-200">managing state</span>{" "}
        efficiently. With experience in
        <span className="text-red-400"> both frontend</span> and backend
        technologies <span className="text-yellow-200">(MERN Stack),</span> I
        love turning ideas into scalable web applications.
        <br />
        <br />
        <div className="flex flex-row justify-center gap-10 mb-20">
          <div>
            <button
              onClick={() =>
                window.open(
                  "https://www.instagram.com/your_username/",
                  "_blank"
                )
              }
              className="bg-yellow-200 flex gap-2 rounded-full px-8 py-2 font-bold text-[1.1rem] cursor-pointer"
            >
              Say Hi
              <FaHandsClapping size={30} />
            </button>
          </div>
          <div>
   <button
  onClick={() => window.open('https://github.com/sakshisahu07/demo-repo', '_blank')}
  className="bg-red-500 flex gap-2 rounded-full px-8 py-2 font-bold text-[1.1rem] cursor-pointer"
>
  Watch my repo
  <IoLogoGithub size={30} />
</button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollName;
