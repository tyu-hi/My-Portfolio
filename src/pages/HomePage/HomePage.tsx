//import React from 'react';
import Projects from '../../components/Projects.tsx'
import './HomePage.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";

const HomePage = () => {
    const linkBorderStyle = {
        padding: '5px 10px', // Add padding for better visibility (optional)
        display: 'block', // Make the links block elements to stack vertically
        marginBottom: '10px', // Add margin between links (optional)
        textDecoration: 'none', // Remove the default underline
        color: 'black', // Set the link color
        borderRadius: '10px',
        backgroundColor: '	#ffaaaa',
      };


  return (
    <div className="homepage-container">
        <div className='content-container'>
            <div className="image-container">
                <img className="profile-image" src="public/meInSunshineRoad.jpg" alt="This is me"/>
            </div>
            <div className="description-container">
                <h1 className="mainHeader-text">
                    Hi! I am Tingyu Gong
                    <span className="waving-hand">👋</span>
                </h1>
                <h2 className="header2-text">
                    I am a Computer Science student at UCLA. Follow me on my journey of creating solutions and making an impact. This site is currently in progress.
                </h2>
                <p style={{color:'#333333'}}>
                    Interested? Connect with me here!
                </p>
                <div className="links-container">
                    <span style={linkBorderStyle}>
                        <a href="https://github.com/tyu-hi" style={{color:'black'}}>
                        <FaGithub color='black' size={20} style={{ marginRight: '5px' }} />
                        GitHub </a>
                    </span>
                    <span style={linkBorderStyle}>
                       <a href="https://www.linkedin.com/in/tingyu-gong-330398253/" style={{color:'black'}}>
                       <FaLinkedin color='black' size={22} style={{ marginRight: '5px' }}/>
                       LinkedIn</a>
                    </span>
                    <span style={linkBorderStyle}>
                        <a href="public/Jan 2024 Resume.pdf" style={{color:'black'}}>
                        <IoMdDocument color='black' size={23} style={{ marginRight: '5px' }}/>
                        Resume</a>
                    </span>
                </div>
            </div>
        </div>
        <div className="projects-container">
            <Projects/>
        </div>
    </div>
  )
}

export default HomePage