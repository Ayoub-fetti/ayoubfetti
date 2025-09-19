import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Ayoub Fetti</b> and I am from Morocco.
            I'm a <b>Full stack developer</b> and a final year college student pursuing <b>Web and Mobile Developemnt</b>. <br/><br/>
            I have done an internship as a <b>Full Stack developer</b> at Virtual Marketing Solutions which is a fintech company.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Javascript' />
        <Skills skill='React' />
        <Skills skill='Vue' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Postgres' />
        <Skills skill='mysql' />
        <Skills skill='PHP' />
        <Skills skill='Laravel'/>
        <Skills skill='Tailwind'/>
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Jira' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Docker'/>
        
      </div>
    </>
  )
}

export default About