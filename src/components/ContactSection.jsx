import React, { useState } from 'react';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import SendIcon from '@mui/icons-material/Send';
import { Zoom } from "react-awesome-reveal";

const ContactSection = () => {
    const [username, setUsername] = useState('');
    const [sender, setSender] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = () => {
        const subject = `Contact from ${username || 'Website Visitor'}`;
        const body = `Name: ${username}\nEmail: ${sender}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:vatchans@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className='Contact'>
            <h1>Contact me</h1>
            <Zoom>
                <div className='Contact-form'>
                    <input
                        type='text'
                        placeholder='Name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        aria-label="Your name"
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        value={sender}
                        onChange={(e) => setSender(e.target.value)}
                        aria-label="Your email"
                    />
                    <textarea
                        placeholder='Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        aria-label="Your message"
                    />
                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <Button
                            className="resume-btn mt-5"
                            style={{
                                color: "white",
                                textTransform: "none",
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: "700",
                                padding: "0.5rem 1rem",
                            }}
                            onClick={handleSend}
                            endIcon={<SendIcon />} // 👈 THIS replaces InputAdornment
                        >
                            Send
                        </Button>
                    </div>


                </div>
            </Zoom>
            <Zoom style={{ margin: "auto 0", width: "100%" }}>

            </Zoom>
        </div>
    );
};

export default ContactSection;
