import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";

const FindWithMe = () => {
  return (
      <div className="flex flex-col gap-2">
            <p>FIND WITH ME</p>
            <div className="flex gap-2">
            <a href='https://www.linkedin.com/in/jhalak-dhiman-aa5823283/' target='blank' className="w-[40px] h-[40px] bg-pure-greys-600 rounded-md hover:translate-y-1 hover:shadow-[10px_-5px_50px_-5px] cursor-pointer flex justify-center items-center text-pure-greys-100"><FaLinkedinIn /></a>
            <a href='https://github.com/JhalakDhiman' target='blank' className="w-[40px] h-[40px] bg-pure-greys-600 rounded-md hover:translate-y-1 hover:shadow-[10px_-5px_50px_-5px] cursor-pointer flex justify-center items-center text-pure-greys-100"><FaGithub /></a>
            <div className="w-[40px] h-[40px] bg-pure-greys-600 rounded-md hover:translate-y-1 hover:shadow-[10px_-5px_50px_-5px] cursor-pointer flex justify-center items-center text-pure-greys-100"><FaGlobeAmericas /></div>
            </div>
        </div>
  )
}

export default FindWithMe
