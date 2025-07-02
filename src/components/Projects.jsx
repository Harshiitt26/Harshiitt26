import React from 'react'
import projects from "./data/projects.json"

const Projects = () => {
  return (
    <>
    <div className="container projects" id='projects'>
      <h1 className='my-5'>PROJECTS</h1>
      <div>
        {
          projects.map((data)=>{
            return(
              <>
              <div key={data.id} className="projects-items my-5" data-aos="flip-left" data-aos-duration="1000">
                <div className="left">
                  <div className="img">
                    <img src={`assets/${data.imageSrc}`} className="card-img-top" alt="..."/>
                  </div>
                  </div>
                  <div className="right">
                    <h2>{data.title}</h2>
                    <ul>
                      <li>{data.description[0]}</li>
                      <li>{data.description[1]}</li>
                      <li>{data.description[2]}</li>
                      <li>{data.description[3]}</li>
                      <li>{data.description[4]}</li>
                    </ul>
                    {/* <a href={data.demo} target='_blank' className="btn btn-primary text-center ">Deploy Link</a> */}
                    <a href={data.source} target='_blank' className="btn btn-primary text-center ">Source Code</a>
                </div>
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

export default Projects