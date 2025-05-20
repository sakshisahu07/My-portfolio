import React from "react";
import About from "./About";
import sakshi from "../assets/images/sakshi.png";
import bg from "../assets/images/bg.jpg"
import SkillsSection from "./Skill";
import ProjectsSection from "./Project"
import ExperienceSection from "./Experience"
// import Footer from "../components/Footer"
const Hero = () => {
 const handleDownload = async () => {
    try {
      const response = await fetch('/resume.pdf');
      if (!response.ok) {
        throw new Error('File not found');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'Sakshi_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error.message);
      alert('Resume file not found. Please check the path.');
    }
  }
  return (
    <section className=" bg-black text-white overflow-hidden">
        <div className="flex justify-between p-4 md:p-10 ">
               <div className="font-bold ">
        <h1
          className="font-poppins md:text-4xl w-10 "
        >
          Sakshi <span className="text-red-400"> Sahu</span>
        </h1>
      </div>
      
      
 <div className="flex flex-col gap-2 md:gap-4 w-[6rem] md:w-[12rem]">
      {/* View Resume Button */}
      <button
        onClick={() => window.open("/resume.pdf", "_blank")}
        className="bg-yellow-200 text-xs p-1 md:text-[1.1rem] text-white  md:px-6  md:py-2 rounded-md font-semibold"
      >
        View Resume
      </button>

      {/* Download Resume Button */}
      <a
        href="/resume.pdf"
        download="Sakshi_Resume.pdf"
        className="bg-red-400 text-center text-xs p-1 md:text-[1.1rem] text-white md:px-6 md:py-2 rounded-md font-semibold"
      >
        Get my resume
      </a>
    </div>


        </div>
        <div className="md:text-8xl font-comic flex justify-center font-bold gap-4">
            A <span className=" text-red-400"> <span className="md:text-[10rem]">L</span>ittle </span> About 
            <span className=" text-red-400 md:text-[10rem]">me</span>
        </div>
       <div className="md:px-30 relative">
  <div className="relative md:h-[30rem] md:w-[70rem] top-10">
    {/* Background image */}
    <img src={bg} alt="" className="md:h-[30rem] opacity-50 w-[70rem] object-fill" />

    {/* Sakshi image */}
    <img src={sakshi} alt="" className=" h-[12rem] w-[12rem] md:h-[30rem] md:w-[30rem] absolute top-0 md:left-40 left-30 md:right-0 bottom-20 md:bottom-35 opacity-90 m-auto z-10 object-contain" />
   
    <h1 className="md:text-[4rem] font-bold absolute  md:top-[18rem]  right-4 bottom-0 md:right-20 z-10 leading-[1.2rem] md:leading-[4.2rem]">
  Sakshi <br />
  <span className="text-red-400">Sahu</span>
</h1>

  </div>
  
</div>

<About/>
<SkillsSection/>
<ProjectsSection/>
<ExperienceSection/>
{/* <Footer/> */}
    </section>
    
  );
};

export default Hero;
