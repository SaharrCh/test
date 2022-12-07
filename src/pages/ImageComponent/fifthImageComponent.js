import React from "react";
import logo1 from './7.png';
import logo4 from './8.png';
import logo5 from './9.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'  
import { Icon, Input } from 'semantic-ui-react'
 class fifthImageComponent extends React.Component{
    render(){
        return(
        <div style={{padding:"3%"}}>
             <Row> 
    
        <Col>
        
 
      
   
      <img
        width={300}
        height={400}
 

 
src={logo1}
      /></Col>
      <Col>
        <img
        width={500}
        height={400}
 
        padding-right={33}
 
src={logo4}
      /></Col>
       <Col>
       <img
        width={300}
        height={400}
  
src={logo5}
      /> 
       </Col>
       </Row>
       <Col><br/></Col>
       <Col><br/></Col>
       <Row> 
    
    <Col>
    <p>Contact Us </p></Col>
  <Col>
<h1>Feel free to reach out if you wanna work
with us, or simply have a chat.</h1></Col>
   <Col>
   <Input iconPosition='left' placeholder='Name'>
      <Icon name='user' />
      <input />
    </Input>
    <br />
   <Input iconPosition='left' placeholder='Email'>
      <Icon name='at' />
      <input />
    </Input>
    <br />
    <Input iconPosition='left' placeholder='Message' >
      <Icon name='chat' />
      <input />
    </Input>
    <br />
    <Button variant="dark" size="lg">
    Send Request
      </Button>
   
   </Col>
   </Row>
        </div>
        )
    }
}
export default fifthImageComponent