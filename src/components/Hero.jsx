import React from 'react'
import { TypeAnimation } from "react-type-animation";
import myImage from '../assets/myPhoto.jpg'
import FindWithMe from "./FindWithMe";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Hero = ({ homeRef }) => {
  return (
    <div ref={homeRef}>
      <div className="w-10/12 mx-auto flex justify-between items-center my-[4rem]">
        <div className="w-[100%] md:w-[50%] lg:w-[50%] font-semibold flex flex-col gap-2">
          <p className="text-[3rem] text-pure-greys-50">Hi,I am</p>
          <p className="text-[3rem] text-pink-300">Jhalak Dhiman</p>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "Web Developer",
              1000,
              "Backend Developer",
              1000,
              "Coder",
              1000,
              "Problem Solver",
              1000,
            ]}
            speed={200}
            deletionSpeed={80}
            repeat={Infinity}
            cursor={true}
            className="text-[3rem] text-pure-greys-50 "
          />
          <p> I am a passionate Full Stack Developer specializing in the MERN stack and NextJs, with strong expertise in building scalable web applications and
            solving complex problems using DSA and C++. I have worked on projects including EdTech platforms and
            management systems, showcasing both technical and problem-solving skills.</p>
          <div className="flex flex-col md:flex-row lg:flex-row gap-24 mt-6">
            <FindWithMe />
            <div className="flex flex-col gap-2">
              <p>BEST SKILL ON</p>
              <div className="flex gap-2">
                <div className="w-[40px] h-[40px] bg-pure-greys-600 rounded-md hover:translate-y-1 hover:shadow-[10px_-5px_50px_-5px] cursor-pointer flex justify-center items-center text-pure-greys-100"><FaReact /></div>
                <div className="w-[40px] h-[40px] bg-pure-greys-600 rounded-md hover:translate-y-1 hover:shadow-[10px_-5px_50px_-5px] cursor-pointer flex justify-center items-center text-pure-greys-100"><FaJsSquare /></div>
                <div className="w-[40px] h-[40px] bg-pure-greys-600 rounded-md hover:translate-y-1 hover:shadow-[10px_-5px_50px_-5px] cursor-pointer flex justify-center items-center text-pure-greys-100"><SiExpress /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] hidden md:flex lg:flex  justify-center">
          <div className="h-[30rem] w-[30rem] rounded-full overflow-hidden group cursor-pointer shadow-[10px_-5px_50px_-5px] shadow-blue-200">
            <img
              src={myImage}
              alt="profile"
              className="w-full h-full object-cover rounded-full 
               scale-100 group-hover:scale-105 
               transition-transform duration-300"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
