import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class MenuBar extends Component {

  constructor(props) {

    super(props);
    this.state = {
    };
    this.baseState = this.state;

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
  }

  loadData = () => {
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
          <img
        alt=""
        src="./src/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}React BasePack</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">FizzBuzz</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, {})(MenuBar);
