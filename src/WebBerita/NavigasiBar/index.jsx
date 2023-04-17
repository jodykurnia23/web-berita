import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigasiBar = () => {
    return ( 
        <div className='mb-5'>
           <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">React Class News</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default NavigasiBar;