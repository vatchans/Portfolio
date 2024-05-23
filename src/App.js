import './App.css';
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import { Fade, Zoom, Slide, wobble } from "react-awesome-reveal";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import CopyrightIcon from '@mui/icons-material/Copyright';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from '@mui/material/Link';
import coding from './93699-coding.json'
import Lottie from "lottie-react";
import Typewriter from 'typewriter-effect';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import { useState } from 'react';
function App() {
  let [Username, setusername] = useState('')
  let [sender, setemail] = useState('')
  let [subject, setsubject] = useState('')
  let [message, setmessage] = useState('')
  let Contact = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post('https://milk-way-crm.onrender.com/users/contact-form', {
        Username,
        sender,
        subject,
        message
      })
    }
    catch (error) {
      console.log(error.response.data)
    }
  }
  return <>
    <Navbar />
    <div className='Container'>
      <div className='content'>
        <p style={{ color: 'white' }}>Hi,</p><Typewriter className='typewriter'
          options={{
            strings: ["I'm Full stack developer ", 'I build Scaleable Websites'],
            autoStart: true,
            loop: true,
          }}
        />
        <p style={{ fontWeight: "400", fontSize: "15px", color: "rgb(153,163,174)", marginTop: "2%" }}>I specialize in full-stack web development using the MERN stack. With my expertise, I can create dynamic and responsive websites that meet the client's requirements. As a full-stack developer, I have a deep understanding of both front-end and back-end technologies and can develop applications that function seamlessly. Contact me to bring your website idea to life.</p>
        <div className='info'>
          <Link href='https://drive.google.com/file/d/1_ZXzwrg3hHpdcI5zaJrXYsS6KPaDHusw/view?usp=sharing' target='_blank' ><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }}>Resume</Button></Link>
        </div>

        <div className='social-links'>
          <Link href='https://github.com/vatchans' target='_blank' ><div ><GitHubIcon /></div></Link>
          <Link href='https://www.linkedin.com/in/sree-vatchan-6a0855246' target='_blank'><div><LinkedInIcon /></div></Link>
          <Link href='mailto:vatchans@gmail.com'><div><MailIcon /></div></Link>

        </div>
      </div>

      <Zoom>
        <div className='Image'>
          <img src='Image.jpeg'>
          </img>
        </div>
      </Zoom>
    </div>
    <div className='abt'>
      <h1>About me</h1>
      <div className='abt-content'>
        <Fade delay={1e2} cascade><div className='abt-me'>
          Hello, my name is A Sree Vatchan, and I am a full-stack developer with a passion for creating complete applications that meet the specific needs of individuals. With my experience in both front-end and back-end web development, I have worked on several exciting projects that leverage the MERN (MongoDB, Express, React, Node.js) stack.

          I take pride in the projects I've created, which showcase my skills and abilities beyond my expertise in the MERN stack. Through building complex applications, I have gained a deep understanding of the various components of the MERN stack, allowing me to deliver high-quality work. I am also proficient in other technologies such as HTML, CSS, and JavaScript.

          As a full-stack developer, I am dedicated to delivering solutions that are efficient, effective, and user-friendly. I enjoy collaborating with teams to bring ideas to life and am always excited to learn new things. When it comes to problem-solving, I am analytical, creative, and resourceful. I take on new challenges with enthusiasm and strive to continuously improve my skills.

          If you are looking for a full-stack developer with MERN stack expertise who is enthusiastic about collaborating with teams to achieve their goals, I would be honored to join your team. Let's work together to bring your ideas to life!
        </div></Fade>
        <Slide>
          <Lottie className='coding'
            animationData={coding} loop={true}></Lottie>
        </Slide>
      </div>
    </div>
    <div className='abt'>
      <h1>Skills</h1>
      <div className='skills row row-cols-1 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-2 g-5 m-1 mt-2 mb-5'>
        <img src='Html.png' className='skills-img'></img>
        <img src='Css.png' className='skills-img'></img>
        <img src='JavaScript-01.png' className='skills-img'></img>
        <img src='logo192.png' className='skills-img'></img>
        <img src='Node-JS-01.png' className='skills-img'></img>
        <img src='pngegg (1).png' className='skills-img'></img>
        <img src='https://isagebrum.com/images/technology/dynamo_db-image.svg' className='skills-img'></img>
        <img src='pngegg.png' className='skills-img'></img>
        <img src='pngwing.com (4).png' className='skills-img'></img>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png' className='skills-img'></img>
        <img src='kotlin-2-logo-png-transparent.png' className='skills-img'></img>

        <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5wggXFTVLF0t58SuNrl4mii6x96w0CN3ef84eLfYUDImc4GBwxv-vWGufrmiDhSHXb6_9_PQz_sh8hdbt5oruCKFNxCl2QUdhzzUAZNNQVIiIZzXq58zkwtfohLsOAUqxArZ_XXYw-No/s1600/JetpackCompose_logo.png' className='skills-img'></img>
        <img src='Npm-01.png' className='skills-img'></img>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="docker" className='skills-img'>
          <path fill="#3A4D54" fill-rule="evenodd" d="M20 96.9v-8.1c0-1.1.7-1.9 1.8-1.9h.3c1.1 0 1.8.9 1.8 1.9v17c0 4.1-2 7.4-5.6 9.5-1.7 1-3.5 1.5-5.4 1.5h-.8c-4.1 0-7.4-2-9.5-5.6-1-1.7-1.5-3.5-1.5-5.4v-.8c0-4.1 2-7.4 5.6-9.5 1.7-1 3.5-1.5 5.4-1.5h.8c2.7.1 5.1 1.1 7.1 2.9zm-15.1 8.5c0 3 1.5 5.2 4.1 6.7 1.1.6 2.2.9 3.4.9 2.9 0 5.1-1.4 6.6-3.9.7-1.2 1-2.4 1-3.8 0-2.6-1.2-4.6-3.3-6.1-1.3-.9-2.7-1.4-4.2-1.4-3.2 0-5.5 1.6-6.9 4.5-.5 1-.7 2.1-.7 3.1zm32.2-11.3h.5c4.4 0 7.8 2.1 9.9 6 .9 1.5 1.3 3.2 1.3 5v.8c0 4.1-2 7.4-5.6 9.5-1.7 1-3.5 1.5-5.4 1.5h-.8c-4.1 0-7.4-2-9.5-5.6-1-1.7-1.5-3.5-1.5-5.4v-.8c0-4.1 2.1-7.4 5.6-9.5 1.7-1.1 3.6-1.5 5.5-1.5zm-7.2 11.3c0 2.9 1.4 5 3.9 6.5 1.2.7 2.4 1 3.8 1 2.9 0 5-1.5 6.5-3.9.7-1.2 1-2.4 1-3.8 0-2.7-1.3-4.8-3.5-6.3-1.2-.8-2.6-1.2-4-1.2-3.2 0-5.5 1.6-6.9 4.5-.6 1.1-.8 2.2-.8 3.2zm34.8-7.2c-.6-.3-1.7-.4-2.3-.4-3.2-.1-5.5 1.7-6.9 4.5-.5 1-.7 2-.7 3.1 0 3.3 1.7 5.6 4.6 7 1.1.5 2.4.6 3.6.6 1 0 2.5-.6 3.4-1.1l.2-.1h.7999999999999999c.9.2 1.5.7 1.5 1.7v.4c0 2.3-4.3 2.9-5.9 3-5.7.4-10-2.7-11.6-8.2-.3-.9-.4-1.9-.4-2.9v-.8c0-4.1 2.1-7.4 5.6-9.5 1.7-1 3.5-1.5 5.4-1.5h.8c2 0 3.9.6 5.6 1.7l.1.1.1.1c.2.3.3.6.3 1v.4c0 1-.7 1.5-1.6 1.7h-.30000000000000004c-.5 0-1.8-.6-2.3-.8zm12.4 2.6c1.5-1.5 3-3 4.5-4.4.4-.4 2-2.1 2.6-2.1h.7999999999999999c.9.2 1.5.7 1.5 1.7v.4c0 .6-.7 1.4-1.2 1.8l-2.7 2.7-4.6 4.7c2 2 4 4 5.9 6l1.6 1.7c.2.2.5.4.6.7.2.3.3.6.3.9v.5c-.2.9-.8 1.6-1.7 1.6h-.3c-.6 0-1.3-.7-1.8-1.1-.9-.8-1.8-1.7-2.6-2.6l-2.9-2.9v4.6c0 1.1-.7 1.9-1.8 1.9h-.3c-1.1 0-1.8-.9-1.8-1.9v-26.1c0-1.1.7-1.9 1.8-1.9h.3c1.1 0 1.8.8 1.8 1.9v11.9zm47.6-6.6h.4c1.1 0 1.9.8 1.9 1.9 0 1.6-1.5 2-2.8 2-1.7 0-3.4 1-4.5 2.2-1.5 1.5-2.1 3.3-2.1 5.4v9.2c0 1.1-.7 1.9-1.8 1.9h-.3c-1.1 0-1.8-.9-1.8-1.9v-9.8c0-3.8 1.8-6.8 4.9-9 1.8-1.2 3.9-1.9 6.1-1.9zm-27.1 18.3c1.4.5 3 .4 4.4.2.7-.3 2.6-1.1 3.3-1h.2c.4.2.8.5 1 .9.5 1 .3 2-.7 2.6l-.3.2c-3.6 2.1-7.5 1.8-11.1-.2-1.7-.9-3-2.3-4-4l-.2-.4c-2.3-4-2-8.3.6-12.1.9-1.3 2.1-2.3 3.5-3.1l.5-.3c3.4-2 7.1-1.8 10.6-.1 1.9.9 3.4 2.3 4.5 4.1l.2.3c.8 1.3-.2 2.5-1.2 3.3-1.2.9-2.4 2-3.5 3-2.7 2.2-5.3 4.4-7.8 6.6zm-3.3-2.3l8.5-7.3c1-.8 2-1.7 3-2.6-.8-1-2.1-1.7-3.1-2.1-2.2-.8-4.4-.6-6.4.6-2.6 1.5-3.8 4-3.7 7 0 1.2.4 2.3 1 3.4.2.4.4.7.7 1M73.7 33.7h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6v-11.4h11.3v-11.3h22.5v-11.3h13.5v22.6z" clip-rule="evenodd"></path><path fill="#00AADA" d="M110.2 37.9c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-72.2c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6000000000000001c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.6-10.5-1.8-13.9-.1z"></path><path fill="#28B8EB" d="M110.2 37.9c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.3.2-.5.2z"></path><path fill="#028BB8" d="M18.5 54.6c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26h-85.1v-.1z"></path><path fill="#019BC6" d="M23.3 54.6c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1h-70.6z"></path><path fill="#00ACD3" fill-rule="evenodd" d="M28.2 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zM39.5 24.3h9.8v9.7h-9.8v-9.7zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z" clip-rule="evenodd"></path><path fill="#23C2EE" fill-rule="evenodd" d="M39.5 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z" clip-rule="evenodd"></path><path fill="#00ACD3" fill-rule="evenodd" d="M50.8 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1z" clip-rule="evenodd"></path><path fill="#23C2EE" fill-rule="evenodd" d="M50.8 24.3h9.8v9.7h-9.8v-9.7zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zM62 35.5h9.8v9.8h-9.8v-9.8zm.9.9h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z" clip-rule="evenodd"></path><path fill="#00ACD3" fill-rule="evenodd" d="M62 24.3h9.8v9.7h-9.8v-9.7zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z" clip-rule="evenodd"></path><path fill="#23C2EE" fill-rule="evenodd" d="M62 13h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.2h-.8v-8.2zm1.4 0h.8v8.2h-.8v-8.2zm1.5 0h.8v8.2h-.8v-8.2zm1.5 0h.8v8.2h-.8v-8.2zm1.4 0h.8v8.2h-.8v-8.2zm1.5 0h.8v8.2h-.8v-8.2z" clip-rule="evenodd"></path><path fill="#00ACD3" fill-rule="evenodd" d="M73.3 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z" clip-rule="evenodd"></path><path fill="#D4EEF1" fill-rule="evenodd" d="M48.6 61.2c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7.1-1.5 1.3-2.7 2.7-2.7" clip-rule="evenodd"></path><path fill="#3A4D54" fill-rule="evenodd" d="M48.6 61.9c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .9-1.9 1.9-1.9M1 55.6h125.3c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.8 4.5-7.5 5.2" clip-rule="evenodd"></path><path fill="#BFDBE0" d="M55.8 80.6c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6.1 6.1 13.7 10.8 27.6 10.9 1-.1 2-.1 3-.1z"></path><path fill="#D4EEF1" d="M45.9 72.7c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.4 1.3 5.8 2.5 11.4 2.9z"></path></svg>
        <img src='https://git-scm.com/images/logos/downloads/Git-Logo-1788C.png' className='skills-img'></img>
      </div>
    </div>
    <div className='abt'>
      <h1>Experience</h1>
      <div class="container-fluid main-section bg-grey">
        <div class="container">
          <div class="row">
            <div class="col-lg col-md-4 col-12">
              <div class="experience">
                <div class="col-12">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}> <h4>AYUR AI</h4>
                    <h5>June, 2023 – Present</h5></div>
                </div>
                <div class="col-12 ex-left">
                  <h4>Full Stack Engineer</h4>
                  <ul>
                    <li>Developed robust Backend API and Web App at Ayurai, specializing in Node.js, Express, React.js, and AWS services.</li>
                    <li>Utilized a wide range of AWS services for cloud deployment, ensuring high availability, scalability, and security of infrastructure.</li>
                    <li>Led development of mobile apps using Kotlin Jetpack Compose, prioritizing intuitive UIs for exceptional user experiences.</li>
                    <li>Performed web scraping to gather valuable data, implementing strategies for reliable extraction despite anti-scraping measures.</li>
                    <li>Implemented Dockerized builds for streamlined deployment and enhanced scalability, improving development workflow agility.</li>
                  </ul>

                  <span>Chennai - TN</span> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='abt'>
      <h1>Projects</h1>
      <div className='projects'>
        <Fade> <div className='prj-card'>
          <div className='prj-img'>
            <video muted={true} playsinline="" autoplay="" loop={true}>
              <source src='New Tab - Google Chrome 2023-05-16 18-56-42 .mp4' />
            </video>
          </div>
          <div className="prj-title">
            <p>Textrovert <span>  Real time Chat Application </span></p>
            <div className='prj-logo'><img src='chatlog02 (1).png'></img></div>
          </div>

          <div className='prj-discription'>
            Textrovert is a dynamic chat application enabling real-time communication through text and voice messages. With expressive features like stickers, GIFs, and multimedia sharing (images, documents, videos, audio files, and location sharing), coordinating plans and sharing important information becomes seamless. Stay organized with online/offline status checks, searchability of previous messages, and the convenience of viewing YouTube videos directly within the chat window. Additionally, a typing indication feature ensures engaged conversations and prompt responses. Experience the power of Textrovert for enhanced connectivity and engagement in your personal and professional interactions.
          </div>
          <div className='prj-button'>
            <Link href='https://github.com/vatchans/Textrovert--Chat-App-' target='_blank' ><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }} >Source&nbsp;<GitHubIcon /></Button></Link>
            <Link href='https://exquisite-selkie-1bc399.netlify.app/ ' target='_blank'><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }}>Open</Button></Link>
          </div>
        </div></Fade>

        <Fade><div className='prj-card'>
          <div className='prj-img'>
            <video muted={true} playsinline="" autoplay="" loop={true}>
              <source src='Milky Way Taste the goodness of dairy Power - Google Chrome 2023-05-16 18-12-00.mp4' />
            </video>
          </div>
          <div className="prj-title">
            <p>Milky way<span>&nbsp;&nbsp;&nbsp;CRM Application</span></p>
            <div className='prj-logo'><img src='android-chrome-192x192.png'></img></div>
          </div>

          <div className='prj-discription'>
            I have developed a Customer Relationship Management (CRM) application for Milky way Dairy Farm's website, catering to three user roles: Admin, Customer, and Customer Executive. The Admin manages customer orders and product inventory through a secure dashboard, while the Customer can browse and purchase products, register complaints, and make secure payments. The Customer Executive handles customer complaints, progressing through stages of pending, processing, and resolved, with notifications sent to customers via email.
            {/*  */}
            This CRM application optimizes customer interactions and support for Milky Dairy Farm, fostering growth and relationship-building.
          </div>
          <div className='prj-button'>
            <Link href='https://github.com/vatchans/Capstone-Project' target='_blank' ><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }} >Source&nbsp;<GitHubIcon /></Button></Link>
            <Link href='https://643ea8b337e85d037ff07afe--venerable-marigold-437243.netlify.app/' target='_blank'><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }}>Open</Button></Link>
          </div>
        </div>
        </Fade>

        <Fade> <div className='prj-card'>
          <div className='prj-img'>
            <video muted={true} playsinline="" autoplay="" loop={true}>
              <source src='Rthymn - Google Chrome 2023-05-16 18-07-17.mp4' />
            </video>
          </div>
          <div className="prj-title">
            <p>Rhythm <span>  Music streaming Application </span></p>
            <div className='prj-logo'><img src='A.png'></img></div>
          </div>

          <div className='prj-discription'>
            Rhythm is a versatile music streaming application that offers a range of features to enhance your music experience. With Rhythm, you can easily play music, create personalized playlists, and stream tracks based on your preferred genres and artists. Enjoy the convenience of accessing your favorite tunes anytime and anywhere, making Rhythm your go-to platform for all your musical needs. Elevate your music journey with Rhythm, the ultimate companion for music enthusiasts.
            Whether you're in the mood for energetic beats or soothing melodies, Rhythm caters to every musical taste.
            discover new songs, explore different genres, and dive into the world of music like never before.
            Experience the joy of music with Rhythm
          </div>
          <div className='prj-button'>
            <Link href='https://magical-taffy-0e39f9.netlify.app/' target='_blank' ><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }} >Source&nbsp;<GitHubIcon /></Button></Link>
            <Link href='https://magical-taffy-0e39f9.netlify.app/ ' target='_blank' ><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }}>Open</Button></Link>
          </div>
        </div>
        </Fade>
        <Fade>
          <div className='prj-card'>
            <div className='prj-img'>
              <video muted={true} playsinline="" autoplay="" loop={true}>
                <source src='JuZslayy - Google Chrome 2023-05-16 18-33-35.mp4' />
              </video>
            </div>
            <div className="prj-title">
              <p>Juzslayy <span> Ecommerce website </span></p>
              <div className='prj-logo'><img src='20220816_165053_0000 (1).png'></img></div>
            </div>

            <div className='prj-discription'>
              Juzslayy is your ultimate online destination for exquisite sarees. Discover a captivating collection featuring a wide variety of styles, fabrics, and designs. With Juzslayy, effortlessly explore and add your favorite sarees to your cart, allowing you to curate your perfect ensemble.

              Experience a seamless shopping journey with our secure and convenient checkout process, offering various payment options for a smooth transaction. Additionally, Juzslayy offers a user-friendly wishlist feature, enabling you to save sarees that catch your eye for future consideration and purchase.
            </div>
            <div className='prj-button'>
              <Link href='https://github.com/vatchans/mini-project' target='_blank' ><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }} >Source&nbsp;<GitHubIcon /></Button></Link>
              <Link href='https://regal-maamoul-9c11df.netlify.app/' target='_blank'><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }}>Open</Button></Link>
            </div>
          </div></Fade>
        <Fade>
          <div className='prj-card'>
            <div className='prj-img'><img src='Screenshot (53).png' style={{ objectFit: "contain" }}></img></div>
            <div className="prj-title">
              <p>Smart water tank<span> Monitoring system</span></p>
              <div className='prj-logo'><img src='Dolphine Logo 2.png'></img></div>
            </div>

            <div className='prj-discription'>
              Smart Water Tank is a clever monitoring system that combines real
              time usage data and current tank level states to predict how many days of supply
              are left. The system integrates with a web application to give users an alert
              message when the water starts to run low, so they can arrange a water delivery
              if needed.
              An alert message will be sent to the users email address, if the water level
              of the tank is lesser to the sensor. Sensor will be attached on the top surface of
              the water tank. This process will be very useful for the apartment peoples and
              old aged peoples who can't walk and go to check water level in tank if it is full
              or if it is less and not sufficient for the use daily usage. Motors can be operated
              on and off using our web application which we have created. Monthly usage can
              be viewed in the website. Monthly bills can be viewed. Every minute the water
              level will be updated in the website. Whenever, we needed to check the water
              level we can take a look of it when it is necessary.
            </div>
          </div>
        </Fade>

      </div>
    </div>
    <div className='abt'>
      <h1>Achievements</h1>
      <Slide><div className='achievements'>
        <img src='award.jpeg'></img>
        <p>Awarded first prize for remarkable project Smart Water
          Tank Monitoring System by SRM Institute of Science and Technology on Project Day
          2022</p>
      </div>
      </Slide>
    </div>
    <div className='Contact' >
      <h1>Contact me</h1>
      <Zoom><div className='Contact-form'>
        <input type='text' placeholder='Name' onChange={(e) => { setusername(e.target.value) }}></input>
        <input type='text' placeholder='Email' onChange={(e) => { setemail(e.target.value) }}></input>
        <input type='text' placeholder='Subject' onChange={(e) => { setsubject(e.target.value) }}></input>
        <textarea placeholder='Message' onChange={(e) => { setmessage(e.target.value) }}></textarea>
      </div>
      </Zoom>
      <Zoom><Button className='resume-btn mt-5' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }} onClick={(e) => {
        Contact(e)
      }}>Send &nbsp;<SendIcon /></Button></Zoom>
    </div>
    <div className='Footer mt-5'>
      <Zoom>
        <div className='about'>
          <img src={'logo.png'}></img>
          <p><CopyrightIcon /> 2023. All Rights Reserved by Sree Vatchan</p>
          <div className='social-links'>
            <Link href='https://github.com/vatchans' target='_blank' ><div ><GitHubIcon /></div></Link>
            <Link href='https://www.linkedin.com/in/sree-vatchan-6a0855246' target='_blank'><div><LinkedInIcon /></div></Link>
            <Link href='mailto:vatchans@gmail.com' ><div><MailIcon /></div></Link>

          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className='address'>
          <h4>Address</h4>
          <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8774557378406!2d80.16132407494472!3d13.043471387278599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52611818ec3f97%3A0xcc2e80d8cf7ae117!2sARK%20apartment!5e0!3m2!1sen!2sin!4v1684251763990!5m2!1sen!2sin" style={{ border: "0", borderRadius: "10px" }} allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          <h6>
            <a href="tel:+919080555495">Phone</a></h6>
          <p className='mt-3'>+91 9080555495</p>
          <h6>
            <a href="mailto:vatchans@gmail.com">Email</a>
          </h6>
          <p className='mt-3'>vatchans@gmail.com</p>
        </div>
      </Zoom>
    </div>
  </>
}

export default App;
