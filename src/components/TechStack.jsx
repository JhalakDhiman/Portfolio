import React, { useState } from 'react'
import tailwind from '../assets/tailwind.png'

const TechStack = () => {

    const techs = {
            FRONTEND:[
                {
                    name:"HTML",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                    level:"Advanced"
                },
                {
                    name:"CSS",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                    level:"Advanced"
                },
                {
                    name:"Javascript",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                    level:"Advanced"
                },
                {
                    name:"Tailwind",
                    icon:tailwind,
                    level:"Advanced"
                },
                {
                    name:"React.js",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                    level:"Advanced"
                },
                {
                    name:"Next.js",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                    level:"Advanced"
                }
            ],
            BACKEND:[
                {
                    name:"Node.js",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                    level:"Advanced"
                },
                {
                    name:"Express.js",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                    level:"Advanced"
                }
            ],
            DATABASE:[
                {
                    name:"MongoDB",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                    level:"Advanced"
                },
                {
                    name:"MySQL",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                    level:"Advanced"
                }
            ],
            TOOLS:[
                {
                    name:"Git",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                    level:"Advanced"
                },
                {
                    name:"Github",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                    level:"Advanced"
                },
                {
                    name:"VS Code",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
                    level:"Advanced"
                },
                {
                    name:"Postman",
                    icon:"https://www.svgrepo.com/show/354202/postman-icon.svg",
                    level:"Advanced"
                },
                {
                    name:"Figma",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                    level:"Advanced"
                },  
            ]
        }

    const [currentTech,setCurrentTech] = useState('FRONTEND')

  return (
    <div className='flex flex-col items-center mt-[4rem]'>
      <div className='flex gap-4'>
        {
            Object.keys(techs).map((tech,index)=>{
                
                return (
                    <button 
                     key={index}
                     onClick={()=>{
                        setCurrentTech(tech)
                    }}
                     className={`p-2 rounded-full outline-none text-[13px] font-semibold ${currentTech===tech?"text-pure-greys-700 bg-caribbeangreen-200":"border-[1px] border-pure-greys-200"}`}>{tech}</button>
                )
            })
        }
      </div>

      <div className='flex flex-col lg:flex-row gap-6 mt-8'>
        {
           techs[currentTech].map((tech,index)=>(
            <div className='bg-richblack-700 hover:bg-richblack-600 hover:shadow-[10px_-5px_50px_-5px] hover:border-[1px] hover:border-richblue-200 hover:shadow-blue-200 cursor-pointer pt-[20px] px-[50px] flex flex-col items-center border-[1px] border-pure-greys-800 rounded-2xl gap-2 group' key={index}>
                <img alt='icon' className='w-[100px] h-[60px] group-hover:rotate-12 group-hover:scale-110 transition-all duration-500' src={tech.icon}/>
                <p>{tech.name}</p>
                <p className='text-blue-300 font-semibold mb-[20px]'>{tech.level}</p>
            </div>
           )) 
        }
      </div>
    </div>
  )
}

export default TechStack


