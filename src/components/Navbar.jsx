import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="container-fluid navbar" data-aos="fade-down" data-aos-duration="1000">
        <div className="left">
          <img src="/assets/favicon/harshiitt26.logo.png" alt="website logo" />
        </div>
        <div className="right">
            <a href="#home" className="navbar_items">Home</a>
            <a href="#experience" className="navbar_items">Experience</a>
            <a href="#skills" className="navbar_items">Skills</a>
            <a href="#projects" className="navbar_items">Projects</a>
            <a href="#contact-me" className="navbar_items">Contact Me</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
