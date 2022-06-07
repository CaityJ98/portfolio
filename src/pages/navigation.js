import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../assets/images/cslogo.png';

function NavBar () {
  return(
 <Navbar bg="dark" variant="dark">
 <Container>
 <img src={Logo} alt="CS Logo"/>
 <Navbar.Brand href="/">Home</Navbar.Brand>
 <Nav className="me-auto">
   <Nav.Link href="/about">About</Nav.Link>
   <Nav.Link href="/contact">Contact</Nav.Link>
   <Nav.Link href="/projects">Projects</Nav.Link>
   
 </Nav>
 
 
 
        </Container>
</Navbar>


  )}

  export default NavBar