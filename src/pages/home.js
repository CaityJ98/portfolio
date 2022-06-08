
// import App from '../App.js';

import Picture from '../assets/images/background.jpg'


function Home () {
  
    return(
       
        <div className="page">
            <img src={Picture} alt='background img'/>
           
                <h1 className="header"> Caitlyn Schaper</h1>
                <div className="hometext">
                <p>&lt;Full Stack Developer in Training&gt;</p>
                <div className="homeblurb">   
                    <p>Hi! I'm Caitlyn, a soon to be graduate of Coder Academy. If you'd like to find out more about me
                    or view some of my projects please visit my &lt;About Me&gt; page and if you'd like to get in contact
                    please visit the &lt;Contact Page&gt;. I look forward to hearing from you!!
                </p>
                </div>
             
                </div>
                
          
            
       
        
    </div>
    )
    
}




export default Home;