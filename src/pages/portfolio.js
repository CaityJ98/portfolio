import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.scss'
import Pic from '../assets/images/trendup.png';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Background from '../assets/images/Portfolio1.jpg'
import recipefinder from '../assets/images/recipefinder.jpg'
import homepage from '../assets/images/homepage.png'
function Portfolio () {
    
    return (
        <div className="portfolio" style={ { backgroundImage: `url('${Background}')`, backgroundPosition: 'cover'}}> 
        <div className="port">
              <div className="heading"><h1>Portfolio</h1></div>
                <p></p>
            <div className="cards">
                <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ Pic } />
        <Card.Body>
          <Card.Title>Trend Up</Card.Title>
          <Card.Text>
           This was my third assessment at Coder Academy.
            This is marketplace website was built using Ruby on Rails. It allows users to buy and
            sell used clothing items. 
          </Card.Text>
          <Button variant="primary" href="https://staging-trend-up.herokuapp.com" target="blank">Visit</Button>
         
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ recipefinder } />
        <Card.Body>
          <Card.Title>Recipe Finder</Card.Title>
          <Card.Text>
           My second assessment at Coder Academy. This is a terminal application was built using Ruby. 
           There is no URL but I invite you to pull the repo. 
          </Card.Text>
          <Button variant="primary" href="https://github.com/CaityJ98/Terminal_application2021" target="blank">Visit</Button>
         
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ homepage } />
        <Card.Body>
          <Card.Title>My First Portfolio Website</Card.Title>
          <Card.Text>
            The first website I ever built. This was my first assessment at Coder Academy, a Portfolio 
            Website. It was built using HTML and CSS. 
          </Card.Text>
          <Button variant="primary" href="https://confident-morse-e98e6d.netlify.app" target="blank">Visit</Button>
         
        </Card.Body>
      </Card>
      </div>
             
          
         
            
</div>
</div>
    )
    
};

export default Portfolio