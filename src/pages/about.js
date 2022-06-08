
import '../App.scss'
import Myself from '../assets/images/selfimg.jpg';
import Wallpaper from '../assets/images/aboutme.jpg'
function About () {
    return (
         
        <div className="about-page">
           
               <img src={Wallpaper} alt="About Me wallpaper"/>
                
           
            <div className="wrapper">
            
                <h1 className="header">About Me</h1>
                <div className="blurb">
                    <p> I'm an aspiring full stack developer </p>
                    </div>
                    <img src={Myself} alt="Picture of me"/>
            </div>
           

        </div>
    )
}

export default About