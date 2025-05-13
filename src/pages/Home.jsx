import React from "react";
import About from "./About";
import sakshi from "../assets/images/sakshi.png";
import bg from "../assets/images/bg.jpg"
const Hero = () => {
  return (
    <section className=" bg-black text-white overflow-hidden">
        <div className="flex justify-between p-10 ">
               <div className="font-bold ">
        <h1
          className="font-poppins text-4xl w-10 "
        >
          Sakshi <span className="text-red-400"> Sahu</span>
        </h1>
      </div>
      
      <a href="/resume.pdf" download>
  <button className="bg-red-400 rounded-2xl px-8 py-2 font-bold text-[1.1rem] cursor-pointer">
    Get my resume
  </button>
</a>

        </div>
        <div className="text-8xl font-comic flex justify-center font-bold gap-4">
            A <span className=" text-red-400"> <span className="text-[10rem]">L</span>ittle </span> About 
            <span className=" text-red-400 text-[10rem]">me</span>
        </div>
       <div className="px-30 relative">
  <div className="relative h-[30rem] w-[70rem] top-10">
    {/* Background image */}
    <img src={bg} alt="" className="h-[30rem] opacity-50 w-[70rem] object-fill" />

    {/* Sakshi image */}
    <img src={sakshi} alt="" className="absolute top-0 left-40 right-0 bottom-35 opacity-90 m-auto z-10 object-contain" />
   
    <h1 className="text-[4rem] font-bold absolute top-[18rem] right-20 z-10 leading-[4.2rem]">
  Sakshi <br />
  <span className="text-red-400">Sahu</span>
</h1>

  </div>
  
</div>

<About/>
    </section>
    
  );
};

export default Hero;
