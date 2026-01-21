import React from 'react'
import contact from '../assets/contact.png'
import FindWithMe from './FindWithMe'

const Contact = ({ contactRef }) => {
    
    return (
        <div ref={contactRef} className='bg-richblack-500 pb-[5rem]'>
            <div className='w-10/12 mx-auto'>
                <h1 className='pt-[8rem] text-pink-400 text-center font-semibold text-[2rem]'>Contact With Me</h1>
                <div className='flex gap-[70px] mt-[3rem]'>
                    <div className='flex flex-col bg-richblack-400 w-[40%] rounded-xl'>
                        <img src={contact} className='rounded-t-xl' />
                        <div className='flex flex-col gap-4 px-6 py-8'>
                            <h1 className='text-[25px] font-bold text-pure-greys-5'>Get In Touch</h1>
                            <p className='text-pure-greys-5'>I’m open to web development opportunities and collaborations. Feel free to reach out using the form. I’ll get back to you as soon as possible.</p>
                            <p className='text-pure-greys-300'>Email : </p>
                            <p className='-mt-5'>dhimansunita407@gmail.com</p>
                            <FindWithMe />
                        </div>
                    </div>
                    <form
                        target='blank'
                        action="https://formspree.io/f/mgoorvga"
                        method="POST"
                        className="flex flex-col gap-5 w-[60%] bg-richblack-400 p-8 rounded-xl"
                    >
                        <p className="text-pink-200 font-semibold text-[1.2rem]">
                            Share your thoughts...
                        </p>
                        <p className="text-pure-greys-5 text-[1.2rem] font-semibold">
                            Contact Form
                        </p>

                        <div className="flex gap-2">
                            <div className="flex flex-col gap-1 w-6/12">
                                <label className="text-pure-greys-200" htmlFor="firstName">
                                    First Name <span className="text-pink-200">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    required
                                    className="bg-richblue-200 text-pure-greys-200 border border-richblue-300 p-2 rounded-lg focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col gap-1 w-6/12">
                                <label className="text-pure-greys-200" htmlFor="lastName">
                                    Last Name <span className="text-pink-200">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    required
                                    className="bg-richblue-200 text-pure-greys-200 border border-richblue-300 p-2 rounded-lg focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-pure-greys-200" htmlFor="email">
                                Email <span className="text-pink-200">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="bg-richblue-200 text-pure-greys-200 border border-richblue-300 p-2 rounded-lg focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-pure-greys-200" htmlFor="subject">
                                Subject <span className="text-pink-200">*</span>
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="bg-richblue-200 text-pure-greys-200 border border-richblue-300 p-2 rounded-lg focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-pure-greys-200" htmlFor="message">
                                Your Message <span className="text-pink-200">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Your Message"
                                required
                                className="bg-richblue-200 text-pure-greys-200 border border-richblue-300 p-2 rounded-lg focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-pink-200 text-pure-greys-5 py-3 px-8 font-semibold mt-3 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_-5px_40px_-5px] hover:shadow-pink-200 transition-all duration-300 rounded-lg max-w-fit self-end"
                        >
                            Send Message
                        </button>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default Contact