import React from 'react'; 
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiTailwindcss, SiVercel, SiPhp, SiVuedotjs, SiDocker,SiLaravel, SiJira, SiPostgresql, SiMysql} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        PHP: <SiPhp/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Postgres : <SiPostgresql/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Tailwind: <SiTailwindcss/>,
        Vercel : <SiVercel/>,
        Vue: <SiVuedotjs/>,   
        Laravel: <SiLaravel/> ,
        Docker: <SiDocker/>,
        Jira: <SiJira/> ,
        mysql: <SiMysql/>       
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
