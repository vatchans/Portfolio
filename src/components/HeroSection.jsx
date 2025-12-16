import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { Zoom } from "react-awesome-reveal";
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
    return (
        <div className='Container'>
            <div className='content'>
                <p style={{ color: 'white' }}>Hi,</p>
                <div className="typewriter-text">
                    <Typewriter
                        options={{
                            strings: [
                                "I'm a Full Stack Developer",
                                "I build scalable applications",
                                "I'm a Cloud & DevOps enthusiast",
                                "I build robust, secure backend servers",
                                "I specialize in AWS services"
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <p style={{ fontWeight: "400", fontSize: "15px", color: "rgb(153,163,174)", marginTop: "2%" }}>
                    I specialize in full-stack web development using the MERN stack. With my expertise, I can create dynamic and responsive websites that meet the client's requirements. As a full-stack developer, I have a deep understanding of both front-end and back-end technologies and can develop applications that function seamlessly. Contact me to bring your website idea to life.
                </p>
                <div className='info'>
                    <Link href='https://drive.google.com/file/d/1Q5vTaZHoyz_-tbe-ZSjLYgb0vsY_paRi/view?usp=sharing' target='_blank'>
                        <Button className='resume-btn' style={{ color: "white", textTransform: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: "700" }}>
                            Resume
                        </Button>
                    </Link>
                </div>

                <div className='social-links'>
                    <Link href='https://github.com/vatchans' target='_blank'>
                        <div><GitHubIcon /></div>
                    </Link>
                    <Link href='https://www.linkedin.com/in/sree-vatchan-6a0855246' target='_blank'>
                        <div><LinkedInIcon /></div>
                    </Link>
                    <Link href='mailto:vatchans@gmail.com'>
                        <div><MailIcon /></div>
                    </Link>
                </div>
            </div>

            <Zoom>
                <div className='Image'>
                    <img src='Image.jpeg' alt="Sree Vatchan - Full Stack Developer" />
                </div>
            </Zoom>
        </div>
    );
};

export default HeroSection;
