import React,{useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home"


const App=()=>{
  useEffect(()=>{
    AOS.init(
      {
        offset:100,duration:700, easing:"ease-in",delay:100,
      }
    )

  })
  return(
  <div className="overflow-x-hidden"> 
  <Navbar/>
  <Home/>

  </div>
  )
};


export default App;
