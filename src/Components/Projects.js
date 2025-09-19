import React from 'react';
import ProjectBox from './ProjectBox';
import AtlasMok from '../images/atlasMok.png';
import fettiAgency from '../images/fettiagencyMok.png';
import iridan3t from '../images/iridan3tMok.png';
import fettiVerce from '../images/fettiverse-mok.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={AtlasMok} projectName="Atlas" />
        <ProjectBox projectPhoto={fettiAgency} projectName="Agency" />
        <ProjectBox projectPhoto={iridan3t} projectName="Iridan" />
        <ProjectBox projectPhoto={fettiVerce} projectName="FettiVerse" />
      </div>

    </div>
  )
}

export default Projects