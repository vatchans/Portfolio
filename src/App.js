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
          <Link href='resume.pdf' download><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }}>Resume</Button></Link>
        </div>
        <div className='social-links'>
          <Link href='https://github.com/vatchans' target='_blank' ><div ><GitHubIcon /></div></Link>
          <Link href='https://www.linkedin.com/in/sree-vatchan-6a0855246' target='_blank'><div><LinkedInIcon /></div></Link>
          <Link href='mailto:vatchans@gmail.com' target='_blank'><div><MailIcon /></div></Link>
          <Link href=' https://wa.me/+919080555495' ><div><WhatsAppIcon /></div></Link>
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
        <img src='pngwing.com (4).png' className='skills-img'></img>
        <img src='pngegg.png' className='skills-img'></img>
        <img src='Npm-01.png' className='skills-img'></img>
        <img src='https://git-scm.com/images/logos/downloads/Git-Logo-1788C.png' className='skills-img'></img>
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
            <Link href='https://github.com/vatchans/Textrovert--Chat-App-' ><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }} >Source&nbsp;<GitHubIcon /></Button></Link>
            <Link href='https://exquisite-selkie-1bc399.netlify.app/'><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }}>Open</Button></Link>
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
            <Link href='https://github.com/vatchans/Capstone-Project' ><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }} >Source&nbsp;<GitHubIcon /></Button></Link>
            <Link href='https://643ea8b337e85d037ff07afe--venerable-marigold-437243.netlify.app/'><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }}>Open</Button></Link>
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
            <Link href='https://magical-taffy-0e39f9.netlify.app/' ><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }} >Source&nbsp;<GitHubIcon /></Button></Link>
            <Link href='https://magical-taffy-0e39f9.netlify.app/'><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }}>Open</Button></Link>
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
              <Link href='https://github.com/vatchans/mini-project' ><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }} >Source&nbsp;<GitHubIcon /></Button></Link>
              <Link href='https://regal-maamoul-9c11df.netlify.app/'><Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }}>Open</Button></Link>
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
            <Link href='mailto:vatchans@gmail.com' target='_blank'><div><MailIcon /></div></Link>
            <Link href=' https://wa.me/+919080555495' ><div><WhatsAppIcon /></div></Link>
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
