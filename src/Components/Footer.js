import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Ayoub Fetti</h4>
      <h4>Copyright &copy; 2025 .fetti</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Ayoub-fetti" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/ayoub-fetti-09925a239/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:devanshsahni@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer