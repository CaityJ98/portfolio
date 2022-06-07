import Logo from '../assets/images/cslogo.png';
import '../App.scss'

function About () {
    return (
        <div className="page">
            <div className="wrapper">
                <img src={Logo} alt="CS Logo"/>
                <h1 className="header">About Me</h1>
                <p> I'm a full stack developer </p>
            </div>

        </div>
    )
}

export default About