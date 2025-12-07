import React from 'react';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Zoom } from "react-awesome-reveal";

const Footer = () => {
    return (
        <div className='Footer'>
            <Zoom>
                <div className='about'>
                    <img src={'logo.png'} alt="Sree Vatchan Portfolio Logo" />
                    <p><CopyrightIcon /> {new Date().getFullYear()}. All Rights Reserved by Sree Vatchan</p>
                    <div className='social-links'>
                        <Link href='https://github.com/vatchans' target='_blank' aria-label="GitHub Profile">
                            <div><GitHubIcon /></div>
                        </Link>
                        <Link href='https://www.linkedin.com/in/sree-vatchan-6a0855246' target='_blank' aria-label="LinkedIn Profile">
                            <div><LinkedInIcon /></div>
                        </Link>
                        <Link href='mailto:vatchans@gmail.com' aria-label="Email Contact">
                            <div><MailIcon /></div>
                        </Link>
                    </div>
                </div>
            </Zoom>
            <Zoom>
                <div className='address'>
                    <h4>Address</h4>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8774557378406!2d80.16132407494472!3d13.043471387278599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52611818ec3f97%3A0xcc2e80d8cf7ae117!2sARK%20apartment!5e0!3m2!1sen!2sin!4v1684251763990!5m2!1sen!2sin"
                            style={{ border: "0", borderRadius: "10px" }}
                            allowFullScreen={true}
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                        />
                    </div>
                    <h6>
                        <a href="tel:+919080555495">Phone</a>
                    </h6>
                    <p className='mt-3'>+91 9080555495</p>
                    <h6>
                        <a href="mailto:vatchans@gmail.com">Email</a>
                    </h6>
                    <p className='mt-3'>vatchans@gmail.com</p>
                </div>
            </Zoom>
        </div>
    );
};

export default Footer;
