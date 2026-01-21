import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import { MdArrowOutward } from "react-icons/md";


const MyWorks = ({workRef}) => {

    const projects = [
        {
            thumbnail:project1,
            category:"Web Development",
            description:"A smart hostel management website designed for seamless room allocation, location-based attendancewith an area range of about 10m and other essential hostel services such as finding information of absentees etc.",
            name:"Hostel Management System",
            technology:["Next.js","Express.js","MongoDB","React.js"],
            link:"https://github.com/JhalakDhiman/HostelManagement"
        },
        {
            thumbnail:project2,
            category:"Web Development",
            description:"An edTech platform offering students access to lectures, progress tracking, and interactive dashboards,while enabling instructors to upload content, earn revenue, and manage their personalized dashboards and many more things to come.",
            name:"StudyNotion",
            technology:["Node.js","Express.js","MongoDB","React.js"],
            link:"https://studyappfrontend.onrender.com"
        },
        {
            thumbnail:project3,
            category:"Web Development",
            description:"Developed an AI-powered medical voice agent that lets users enter symptoms, consult with suggested AI doctorsthrough voice calls, receive personalized advice, and automatically get a generated medical report after each consultation.",
            name:"AI Medical Voice Agent",
            technology:["Next.js","Express.js","MongoDB","React.js"],
            link:"https://ai-medical-voice-agent-tawny.vercel.app/"
        }
    ]

  return (
    <div ref={workRef} className='bg-richblack-500'>
      <div className='w-11/12 mx-auto flex flex-col items-center'>
        <h1 className='text-pure-greys-5 font-bold text-[3rem]'>My Works</h1>
        <p className='text-pure-greys-300 text-[1.1rem]'>A showcase of my latest projects and creations</p>
        <div className='flex gap-12 mt-[3rem]'>
            {
                projects.map((project)=>(
                 <div className='flex bg-richblack-400 flex-col gap-3 w-[33.33%] p-6 rounded-xl border-[1px] border-pure-greys-700 hover:shadow-[12px_-5px_50px_-5px] hover:shadow-richblue-700 hover:-translate-y-3 hover:translate-x-1 transition-all duration-500 hover:border-[2px] hover:border-blue-500'>
                    <img alt='thumbnail' className='rounded-xl' src={project.thumbnail}/>
                    <div className='bg-richblack-300 px-2 py-1 text-[13px] font-semibold rounded-full max-w-fit'>
                        {project.category}
                    </div>
                    <p className='text-[1.5rem] font-semibold text-pure-greys-5'>{project.name}</p>
                    <p className='text-pure-greys-200'>{project.description}</p>
                    <div className='flex gap-2 max-w-full'>
                        {
                            project.technology.map((tech)=>(
                                <div className='p-2 bg-richblue-5 text-richblue-25 rounded-lg'>{tech}</div>
                            ))
                        }
                    </div>
                    <a href={project.link} target='blank' className='bg-richblue-50 hover:border-richblue-25 p-2 gap-2 content-center self-center mt-3 rounded-full border-2 max-w-fit border-richblue-100 transition-all duration-500 flex items-center group'>Explore <div className='h-[20px] w-[20px] flex items-center justify-center rounded-full border-[1px] border-richblue-100 group-hover:rotate-90 transition-all duration-500'><MdArrowOutward/></div></a>
                 </div>   
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default MyWorks
