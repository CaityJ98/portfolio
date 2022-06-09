import React from 'react';

import '../App.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
function Portfolio () {
    
    return (
       
        <div className="port">
             <Card style={{ width: '20vw', height: '20vh' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
            <div className="test"><h1>HELLO</h1></div>
            <a 
                    target="blank"
                    rel="noreferrer"
                    href="https://staging-trend-up.herokuapp.com/users/sign_in"
                >Trend Up</a>
         
            
</div>
      
    )
    
};

export default Portfolio