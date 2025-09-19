import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    AtlasDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    AtlasGithub : "https://github.com/Ayoub-fetti/AtlasVolunteer",

    AgencyDesc : "FettiAgency is a demo website showcasing a modern digital agency concept. It highlights creative services, clean design, and responsive layouts, serving as a sample project to demonstrate web development skills and UI/UX best practice",
    AgencyGithub : "https://github.com/Ayoub-fetti/FettiAgency",
    AgencyWebsite : "https://fettiagency.vercel.app/",

    IridanDesc:"Iridan3t is a demo ERP platform designed for digital management. It provides an all-in-one solution to streamline business processes—such as projects, clients, and resources—while showcasing efficient data handling and a modern, user-friendly interface",
    IridanGithub:"https://github.com/Ayoub-fetti/Iridan-3t",

    FettiVerseDesc:"FettiVerse is your go-to source for web, mobile, and DevOps insights. We deliver tutorials, best practices, and industry updates to help developers build smarter, faster, and more scalable applications",
    FettiVerseGithub:"https://github.com/Ayoub-fetti/InfoPulse",
    FettiVerseWebsite:"https://fettiverse.tech/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button
                className='projectbtn'
                disabled={!desc[projectName + 'Website']}
                style={{
                  opacity: !desc[projectName + 'Website'] ? 0.5 : 1,
                  cursor: !desc[projectName + 'Website'] ? 'not-allowed' : 'pointer'
                }}
              >
                <CgFileDocument/> Demo
              </button>
              {/* test */}
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox