import React from 'react'
import experience from "./data/experience.json"

const Experience = () => {
  return (
    <>
    <div className="container experience" id='experience'>
      <h1 className='my-5'>EXPERIENCE</h1>
      {experience.map((data)=>{
        return(
          <div key={data.id} className='experience-items my-5' data-aos="flip-left" data-aos-duration="1000">
            <div className="left">
              <a href={`${data.companyUrl}`} target='_blank'>
                <div className="img">
                  <img src={`/assets/${data.imageSrc}`} alt="comapny's img" />
                </div>
              </a>
            </div>
            <div className="right">
              <h2>{data.role}</h2>
              <h4>{data.startDate}{" to "}{data.endDate}</h4>
              <h4>{data.location}</h4>
              <ul>
                <li>{data.experiences[0]}</li>
                <li>{data.experiences[1]}</li>
                <li>{data.experiences[2]}</li>
                <li>{data.experiences[3]}</li>
                <li>{data.experiences[4]}</li>
              </ul>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Experience
