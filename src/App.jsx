import "./App.css";
import TechStack from "./components/TechStack";
import MyWorks from "./components/MyWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Information from "./components/Information";
import Technology from "./components/Technology";
import { useRef } from "react";

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scroll = (ref)=>{
    const top =
      ref.current.getBoundingClientRect().top +
      window.pageYOffset -
      100;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
  

  return (
    <div className="bg-richblack-900 text-pure-greys-50 w-full">
      <div className="w-full h-[60px] border-b-[1px] z-20 bg-richblack-900 border-b-pure-greys-600 sticky top-0">
        <div className="w-10/12 h-full mx-auto">
          <div className="flex justify-between h-full items-center">
            <div className="font-semibold text-[20px]">
              Full Stack Developer
            </div>
            <div>
              <ul className="flex gap-8 cursor-pointer text-semibold">
                <li onClick={()=>scroll(homeRef)} className="hover:text-pink-400">Home</li>
                <li onClick={()=>scroll(aboutRef)} className="hover:text-pink-400">About</li>
                <li onClick={()=>scroll(workRef)} className="hover:text-pink-400">Works</li>
                <li onClick={()=>scroll(contactRef)} className="hover:text-pink-400">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Hero homeRef={homeRef}/>

      <Information aboutRef={aboutRef}/>

      <Technology />

      <MyWorks workRef={workRef}/>

      <Contact contactRef={contactRef}/>

      <Footer/>
    </div>
  );
}

export default App;