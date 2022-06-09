import React from 'react'
import '../App.scss'
import Myself from '../assets/images/selfimg.jpg';
import Wallpaper from '../assets/images/aboutme.jpg'


function About () {
   
    return (
        
        <div className="about-page">
           
               <img src={Wallpaper} alt="About Me wallpaper"/>
                
           
            <div className="about-me">
            
                <h1>About Me</h1>
                <img src={Myself} alt="Picture of me"/> 
                <div className="blurb">
                
                    <p> Hi there! I'm Caitlyn, an aspiring coder. <br />
                        In August of 2022 I will graduate from Coder Academy and hope to gain  <br />
                        employment as a Junior Software Engineer. I have created projects<br />
                         (which can be seen  in my Portfolio) using: <br />
                         - HTML, <br />
                         - CSS, <br /> 
                         - Ruby, <br />
                         - Ruby on Rails, <br />
                         - JavaScript, <br />
                         - JSON,<br />
                         - React,<br />
                         and<br />
                         - Responsive design. <br />
                         This course has taught me so much and I look forward to being able <br />
                         to put the skills I've learnt into practice. Creating Websites and <br />
                        applications is so exciting to me and I always love a challenege.
                         </p>
                    </div>
                      

            </div>
      
           

        </div>
      
    )
}

export default About