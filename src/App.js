import React, { Component } from 'react';
import ChartWrapper from './ChartWrapper.js';
import GenderDropdown from './GenderDropdown.js';
import Navbar from 'react-bootstrap/Navbar.js';
import Container from 'react-bootstrap/Container.js';
import Row from 'react-bootstrap/Row.js';
import Col from 'react-bootstrap/Col.js';


class App extends Component {
  state = {
    gender: "men"
  }

  genderSelected = (gender) => this.setState({ gender });

  render() {
    return (
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand>Barcharts</Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col xs={12}>
              <GenderDropdown genderSelected={this.genderSelected} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ChartWrapper gender={this.state.gender} />
            </Col>
          </Row>
          
        </Container>
      </div>
    );
  }
}

export default App;
