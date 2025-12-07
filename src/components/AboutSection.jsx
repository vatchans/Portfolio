import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import Lottie from "lottie-react";
import coding from '../93699-coding.json';

const AboutSection = () => {
    return (
        <div className='abt'>
            <h1>About me</h1>
            <div className='abt-content'>
                <Fade delay={100} cascade triggerOnce>
                    <div className='abt-left'>
                        <div className="about-intro">
                            <h3 className="greeting">👋 Hello, I'm <span className="highlight">Sree Vatchan</span></h3>
                            <p className="tagline">Full-Stack Developer | MERN Stack Specialist | Cloud Enthusiast</p>
                        </div>

                        <div className="about-card">
                            <div className="card-icon">💻</div>
                            <div className="card-content">
                                <h4>The Journey</h4>
                                <p>
                                    I'm a passionate full-stack developer who loves turning ideas into reality through code.
                                    With hands-on experience in the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js),
                                    I build scalable, efficient, and user-friendly applications that make a difference.
                                </p>
                            </div>
                        </div>

                        <div className="about-card">
                            <div className="card-icon">🚀</div>
                            <div className="card-content">
                                <h4>What I Do</h4>
                                <p>
                                    From crafting <strong>intuitive front-end interfaces</strong> to architecting <strong>robust backend systems</strong>,
                                    I handle the entire development lifecycle. I specialize in creating responsive web applications,
                                    RESTful APIs, and deploying solutions on <strong>AWS cloud infrastructure</strong>.
                                </p>
                            </div>
                        </div>

                        <div className="about-card">
                            <div className="card-icon">🎯</div>
                            <div className="card-content">
                                <h4>My Approach</h4>
                                <p>
                                    I believe in <strong>clean code</strong>, <strong>best practices</strong>, and <strong>continuous learning</strong>.
                                    Whether it's implementing Docker containerization, optimizing database queries, or creating
                                    delightful user experiences with React, I approach every challenge with creativity and analytical thinking.
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>

                <div className='abt-right'>
                    <Slide direction="right" triggerOnce>
                        <Lottie className='coding' animationData={coding} loop={true} />
                    </Slide>

                    <Fade delay={300} triggerOnce>
                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number">5+</div>
                                <div className="stat-label">Technologies</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">10+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">100%</div>
                                <div className="stat-label">Commitment</div>
                            </div>
                        </div>

                        <div className="about-footer">
                            <p>
                                <strong>Let's build something amazing together!</strong> I'm always excited to collaborate on
                                innovative projects and explore new technologies. Whether you're looking for a dedicated
                                team member or a freelance developer, I'm ready to bring your vision to life.
                            </p>
                        </div>
                    </Fade>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;
