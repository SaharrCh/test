import React from "react";
import logo1 from './3.png';
import logo4 from './4.png';
import logo5 from './5.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 class thirdImageComponent extends React.Component{
    render(){
        return(
        <div style={{padding:"10%"}}>
             <Row> 
    
        <Col>
        
 
      
   
      <img
        width={300}
        height={300}
 

 
src={logo1}
      /> <p>Terry Siphron</p>
      Interior Designer</Col>
      <Col>
        <img
        width={300}
        height={300}
 
        padding-right={33}
 
src={logo4}
      /> <p>Kadin Rosser</p>
        Interior Decorator</Col>
       <Col>
       <img
        width={300}
        height={300}
  
src={logo5}
      /> 
       <p>Miracle Vetrovs</p>
     
       Project Manager</Col>
       </Row>
        </div>
        )
    }
}
export default thirdImageComponent