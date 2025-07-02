import React from 'react'
import skills from "./data/skills.json"

const Skills = () => {
  return (
    <>
    <div className="container skills" id="skills">
      <h1 className='my-5'>SKILLS</h1>
      <div className="skills-items">
      {
        skills.map((data)=>{
          return(
            <>
              <div className="skills-items-item" key={data.id} data-aos="flip-left" data-aos-duration="1000">
                
                <img src={`/assets/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
                
              </div>

            </>
          )
        })
      }
      </div>
    </div>
    </>
  )
}

export default Skills
