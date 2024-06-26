import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import RecentWorks from "./Components/RecentWorks";
import Testinomial from "./Components/Testinomial";
import StarsCanvas from "./Utils/star";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { FaArrowUp } from "react-icons/fa";
import {  useState } from "react";

function App() {
  const [showGoToTop, setshowGotoTop] = useState(false)
  const handleScrollButtonVisiblity = () => {
    window.scrollY > window.screen.height ? setshowGotoTop(true) : setshowGotoTop(false);
  }
  window.addEventListener('scroll',handleScrollButtonVisiblity)

   



  return (
    <BrowserRouter>
      <div className="bg-primary1 relative  ">
        <div className=" relative z-20" >
          <Homepage />
          <StarsCanvas />
        </div>
        <About />
        <div className="relative z-0">
          <RecentWorks />
          <StarsCanvas />
        </div>
        <Testinomial />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
       {
        showGoToTop? <Link to="#home" smooth   className=' z-0    flex items-center justify-center top-[90%] fixed right-0 h-8 w-8 bg-teal-400 rounded-sm'>
        <FaArrowUp className='' />

      </Link>:<div/>
       }
      </div>
    </BrowserRouter>
  );
}

export default App;
