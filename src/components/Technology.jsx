import React from 'react'
import TechStack from './TechStack'

const Technology = () => {
    return (
        <div>
            <div className="bg-richblack-800 pt-[10rem] pb-[7rem]">
                <div className="w-10/12 mx-auto">
                    <div className="flex flex-col items-center gap-3">
                        <h1 className="text-blue-200 font-bold text-[20px] text-center">Technologies</h1>
                        <p className="text-pure-greys-5 text-[3rem] font-bold text-center">My Tech Stack</p>
                        <p className="text-pure-greys-50 font-semibold text-center">Here are the technologies and tools I use to bring ideas to life. From frontend<br /> to backend, I work with modern frameworks and languages to build scalable solutions.</p>
                    </div>

                    <TechStack />
                </div>
            </div>
        </div>
    )
}

export default Technology
