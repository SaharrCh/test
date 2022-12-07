import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
class NavBarComponent extends React.Component{
    render(){
        return(
        <div>
          <Navbar >
        <Container>
          <Navbar.Brand href="#home" 
width= {68}
height={32}
left= {165}
top= {98}

font-family={'Manrope'}

font-weight= {700}
font-size= {23.5728}
line-height= {32}


>Hover</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"
            
            width= {35}
            height={16}
            left= {352}
            top= {106}
            
            font-family={ 'Manrope'}
            font-weight= {600}
            font-size= {12}
            line-height={16}
            >About</Nav.Link>
            <Nav.Link href="#features"
                 width= {49}
                 height={16}
                 left= {429}
                 top= {106}
                 
                 font-family={ 'Manrope'}
                 font-weight= {600}
                 font-size= {12}
                 line-height={16}
            >Projects</Nav.Link>
            <Nav.Link href="#pricing"
              width= {48}
              height={16}
              left= {516}
              top= {106}
              
              font-family={ 'Manrope'}
              font-weight= {600}
              font-size= {12}
              line-height={16}
            >Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
        )
    }
}
export default NavBarComponent