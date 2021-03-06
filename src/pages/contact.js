import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Form, Button } from 'react-bootstrap'
// import Wallpaper from '../assets/images/aboutme.jpg'
import '../App.scss'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
        if (name && email && message) {
           const serviceId = 'service_2guldea';
           const templateId = 'template_w3mliib';
           const userId = 'BWAO2Ouou_0Qe8UaX';
           const templateParams = {
            name,
            email,
            message
           

        };
       

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));
           alert('Your message was sent successfully!')
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
        
    }
  
   
    return (
       
        <div className="form">  
        {/* <img src={Wallpaper} alt="A brick back ground" />       */}
       
        <div className="title">
            <h1>Contact Me</h1>
        </div>
     <div id="contact-form">
     <p> Please contact me if you have any questions or just want to get in touch. You can do so by using the form below  <br />
     or giving me a call on 0413 906 408. <br />
            I look forward to hearing from you!</p>
            <br />
        <Form>
            
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label><h4>Name</h4></Form.Label>
            <Form.Control type="email" placeholder="Enter your Name" value={name} onChange={e => setName(e.target.value)}></Form.Control>
            </Form.Group>
             {/* <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} /> */}
             <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label><h4>Email address</h4></Form.Label>
             <Form.Control type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}  />
        {/* <input type="email" placeholder="Your email address" /> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="Message">
    <Form.Label><h4>Message</h4></Form.Label>
    <Form.Control as="textarea" rows={5} placeholder="Enter your message" value={message} onChange={e => setMessage(e.target.value)} />
  </Form.Group>
        {/* <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea> */}
        <Button variant="primary" type="submit" onClick={submit}>Send Message</Button>
        <span className={emailSent ? 'visible' : null}></span>
        
        
   
        
        
        
        </Form>
       
            
       
        </div>
        </div>
      
    );
   
    
};

export default Contact;