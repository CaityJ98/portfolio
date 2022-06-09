import React from 'react'
import '../App.scss'
import Myself from '../assets/images/selfimg.jpg';
import Wallpaper from '../assets/images/aboutme.jpg'


function About () {

    return (
        
        <div className="about-page" style={ { backgroundImage: `url('${Wallpaper}')`, backgroundPosition: 'cover'}}>
           
               {/* <img src={Wallpaper} alt="About Me wallpaper"/> */}
                
           
            <div className="about-me">
            
                <h1>About Me</h1>
            </div>
           <div className="contents">
                <img src={Myself} alt="Picture of me"/> 
                <div className="blurb">
                    <div className="spiel"><p> Hi there! I'm Caitlyn, an aspiring coder. <br />
                        I'm an outgoing and enthusiastic person, always ready to take on any 
                        challenge thrown my way. 
                        In August of 2022 I will graduate from Coder Academy and hope to gain  
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
                         This course has taught me so much and I look forward to being able
                         to put the skills I've learnt into practice. Creating Websites and 
                        applications is so exciting to me and I always love a challenge. <br />
                        If you would like to see some of my work please go to my Portfolio page. <br />
                        
                         </p></div>
                    
                    </div>
                      

            </div>
      
           

        </div>
      
    )
}

export default About