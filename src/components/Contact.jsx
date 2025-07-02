import React from 'react'
import { FaInstagram, FaLinkedin ,FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import links from "./data/contact-links.json"


const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact-me'>
      <h1 className='my-5'>CONTACT ME</h1>
      <div className="contact-icons" data-aos="zoom-in" data-aos-duration="1000">
        <a href={links.gmail} target='_blank' rel="noopener noreferrer"  className="contact-icon"><SiGmail className='icon'/></a>
        <a href={links.linkedIn} target='_blank' className="contact-icon"><FaLinkedin className='icon'/></a>
        <a href={links.github} target='_blank' className="contact-icon"><FaGithub className='icon'/></a>
        <a href={links.instagram} target='_blank' className="contact-icon"><FaInstagram className='icon'/></a>
        <a href={links.facebook} target='_blank' className="contact-icon"><FaFacebook className='icon'/></a>
      </div>
    </div>
      
    </>
  )
}

export default Contact
