import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col,Button, Form, FormGroup, Label, Input, FormText,Alert  } from 'reactstrap';


class App extends Component {
  state={
    vote: false
  }
  onVote =()=>{
    this.setState({vote: true})
    document.getElementById('b1').style.visibility='hidden'
    document.getElementById('b2').style.visibility='hidden'
  }
  
    render(){
      const {vote} =this.state
      
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://music.lakorn.asia/app/uploads/4.jpg" className="logo" alt="logo" />
          <h1 className="App-title">Welcome to Mask Singer</h1>
        </header>
        <div>
          <p></p>
          <Container>
          <Row>
          <Col xs="6"><img src="https://i.pinimg.com/originals/93/e3/1b/93e31b6f997cd94b5bdc70f5f052b5c5.jpg" className="img" alt="logo" /><br/><br/>
          <Button id="b1" color="secondary" size="lg" onClick={this.onVote}>VOTE</Button>
          </Col>
          <Col xs="6"><img src="https://i.pinimg.com/originals/70/7d/92/707d92c3d67b5a80cea4cddb7ce11c34.jpg" className="img" alt="logo" /><br/><br/>
          <Button id="b2" color="secondary" size="lg" onClick={this.onVote}>VOTE</Button>
          </Col>
        </Row>
        <br/>
        <Row>
            <Col>
            {
            vote ?(<Alert color="primary"> Thank you for your vote.!!
           </Alert>): null
            }
           </Col>
            </Row>

        </Container>

        </div>
      </div>
    );
  }
}

export default App;
