import React from 'react';
import { Fade } from "react-awesome-reveal";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectsSection = () => {
    const projects = [
        {
            title: "Ayur AI",
            description: "A comprehensive healthcare platform integrating AI for personalized Ayurvedic treatments. Features include doctor consultations, medicine ordering, and AI-driven health analysis.",
            tech: "MERN Stack, AWS, Python",
            video: "Milky Way Taste the goodness of dairy Power - Google Chrome 2023-05-16 18-12-00.mp4",
            github: "https://github.com/vatchans",
            link: "https://ayurai.in"
        },
        {
            title: "E-Commerce Dashboard",
            description: "A full-featured admin dashboard for managing products, orders, and users. Includes real-time analytics and inventory management.",
            tech: "React, Node.js, MongoDB",
            video: "Milky Way Taste the goodness of dairy Power - Google Chrome 2023-05-16 18-12-00.mp4",
            github: "https://github.com/vatchans",
            link: "#"
        },
        {
            title: "Social Media App",
            description: "A real-time social networking application with features like posts, likes, comments, and real-time chat functionality.",
            tech: "MERN Stack, Socket.io",
            video: "Milky Way Taste the goodness of dairy Power - Google Chrome 2023-05-16 18-12-00.mp4",
            github: "https://github.com/vatchans",
            link: "#"
        }
    ];

    return (
        <div className='abt'>
            <h1>Academic Projects</h1>
            <Fade cascade damping={0.1}>
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
            </Fade>
        </div>
    );
};

export default ProjectsSection;
