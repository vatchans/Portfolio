import React from 'react';
import { Fade } from "react-awesome-reveal";

const ExperienceSection = () => {
    return (
        <div className='abt'>
            <h1>Experience</h1>
            <Fade>
                <div className="mt-4 w-100">
                    <div className="container"> {/* Use container for proper width */}
                        <div className="row">

                            {/* FIX: Use proper column sizes */}
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="experience w-100">

                                    {/* Title Row */}
                                    <div className="row align-items-center mb-2 w-100">
                                        <div className="col-12 d-flex align-items-center gap-5 w-100">
                                            <h4 className="mb-0">AYUR AI</h4>
                                            <h5 className="mb-0 ml-3 ">June, 2023 – Present</h5>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="row">
                                        <div className="col-12 ex-left">
                                            <h4>Full Stack Engineer</h4>
                                            <ul>
                                                <li>Developed robust Backend API and Web App at Ayurai, specializing in Node.js, Express, React.js, and AWS services.</li> <li>Utilized a wide range of AWS services for cloud deployment, ensuring high availability, scalability, and security of infrastructure.</li> <li>Led development of mobile apps using Kotlin Jetpack Compose, prioritizing intuitive UIs for exceptional user experiences.</li> <li>Performed web scraping to gather valuable data, implementing strategies for reliable extraction despite anti-scraping measures.</li> <li>Implemented Dockerized builds for streamlined deployment and enhanced scalability, improving development workflow agility.</li>
                                            </ul>
                                            <span>Chennai - TN</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ExperienceSection;
