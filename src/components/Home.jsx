import React, { useEffect, useRef } from 'react'
import hero from "./data/hero.json"
import Typed from 'typed.js'



const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
          " Welcome To My Portfolio.",
          // "A passionate MERN Stack Developer.",
          "I am a MERN Stack Developer",
          "My Name is Harshit Kumar.",
          "Let's build something amazing together."
      ],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1000,
      loop: true
    }
    const typed = new Typed(typedRef.current, options);
    return ()=>{
      typed.destroy()
    }
  }, [])
  
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-right" data-aos-duration="1000">
            <h1><span ref={typedRef}></span></h1>
            <a href="./assets/pdf/resume.pdf" download="Harshiitt26.pdf" className="btn">Download Resume</a>
        </div>
        <div className="right" data-aos="fade-left" data-aos-duration="1000">
            <div className="img">
                <img src={`/assets/${hero.imgSrc}`} alt="hero" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
