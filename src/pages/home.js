import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'  
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarComponent from './navComponent/nav';
import ImageComponent from './ImageComponent/imageComponent';
import SecondImageComponent from './ImageComponent/secondImageComponent';
import ThirdImageComponent from './ImageComponent/thirdImageComponent';
import FourthImageComponent from './ImageComponent/fourthImageComponent';
import FifthImageComponent from './ImageComponent/fifthImageComponent';

class Home extends React.Component{
    render(){
        return(
        <div>
            <Container>
    <Row>
      <Col>
      <NavBarComponent></NavBarComponent>
      
      <h1    
>We Make An <br/> Interior Design<br/> For Your<br/> Home.</h1>
      <p>Here at Glimmer, we focus on making a comfortable place for you, your family and friends.</p><br/> 
      <Button variant="outline-secondary">watch demo</Button>{' '}  
      </Col>
      <Col><ImageComponent></ImageComponent></Col>
    </Row>
    <Col><br/></Col>
     
    <Row> 
    <Col><SecondImageComponent></SecondImageComponent></Col>
        <Col>
        <h1>A friendly bunch of thinkers & designers who constantly love to delivering good stuff. </h1><br/>
        <h2><div style={{padding:"30%"}}>10   65    23</div></h2> 
 </Col>
      
    </Row>
    <Col><br/></Col>
     
    <Row> 
    <p>Our Team</p><br/> 
        <Col>
        <h1>We are a team making stylish, <br></br>
minimal, modern projects <br></br>
and creating unique experiences</h1><br/>
 </Col>
 <Row> 
 <Col><ThirdImageComponent></ThirdImageComponent></Col>
    </Row>
    <Col><br/></Col>
    <Row>
      <Col>
      <p>How we do it </p><br/> 
      <h1>We focus on proper <br/> space planning, as<br/> well as the aesthetics</h1><br/> 
      <p>We create functional, safe, and aesthetically pleasing spaces by assessing space requirements, 
        determining optimal furniture placement, and selecting decorative items, 
        all while adhering to relevant blueprint, building code, and inspection requirements.</p>
      </Col>
      <Col><FourthImageComponent></FourthImageComponent></Col>
    </Row>
    <Col><br/></Col>
    <Col>
        <h1>Check out our recently 
added projects</h1><br/>
 </Col>
 <Row> 
 <Col><FifthImageComponent></FifthImageComponent></Col>
    </Row>
    <Col><br/></Col>
    <Row> 
    <Col>
    <div  
       style={{backgroundColor:"black"}}>  </div> </Col>
    </Row>
    </Row>
  </Container>
        </div>
        )
    }
}
export default Home