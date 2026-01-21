import React from 'react'
import skills from '../assets/skills.gif'
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Information = ({aboutRef}) => {
    return (
        <div ref={aboutRef} className="bg-richblack-800 pt-[6rem]">
            <div className="w-10/12 mx-auto flex gap-[6rem]">
                <div className="w-[40%]">
                    <img src={skills} alt='skill' className="rounded-xl" />
                </div>
                <div className="w-[60%] flex flex-col gap-7">
                    <h1 className="text-pure-greys-5 text-[2rem] font-semibold">Solving real-world problems through clean and scalable code.</h1>
                    <p className="text-pure-greys-50 text-[1rem] font-semibold">I build web applications with a strong focus on usability, performance, and maintainability. I enjoy breaking down complex problems and delivering simple, effective solutions using modern frameworks and best practices.</p>
                    <p className="text-pure-greys-50 text-[1rem] font-semibold">Focused on modern frontend and backend technologies, I enjoy creating meaningful digital experiences that solve real problems.</p>
                    <div className="flex flex-col gap-2 items-center">
                        <p>BEST SKILL ON</p>
                        <div className="flex gap-2">
                            <div className="w-[40px] h-[40px] bg-pure-greys-600 rounded-md hover:translate-y-1 hover:shadow-[10px_-5px_50px_-5px] cursor-pointer flex justify-center items-center text-pure-greys-100"><FaReact /></div>
                            <div className="w-[40px] h-[40px] bg-pure-greys-600 rounded-md hover:translate-y-1 hover:shadow-[10px_-5px_50px_-5px] cursor-pointer flex justify-center items-center text-pure-greys-100"><FaJsSquare /></div>
                            <div className="w-[40px] h-[40px] bg-pure-greys-600 rounded-md hover:translate-y-1 hover:shadow-[10px_-5px_50px_-5px] cursor-pointer flex justify-center items-center text-pure-greys-100"><SiExpress /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information
