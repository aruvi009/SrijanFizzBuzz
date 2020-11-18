import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, FormControl, Button } from 'react-bootstrap';
import dataService from '../../providers/dataService';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: '',
      error: '',
      FizzBuzzData: []
    };
  }

  componentDidMount() {
  }

  updateTickets = async () => {
    this.setState({ error: '' });
    if (isNaN(this.state.count)) {
      this.setState({ error: "Count should be a number" });
    } else {
      if (this.state.count > 0) {

        let data = await dataService.fetchFizzBuzzValues(this.state.count);
        if (data != "") {
          this.setState({ FizzBuzzData: JSON.parse(data) });
        }
      } else {
        this.setState({ error: "Count should be greater than 0" });
      }
    }
  }

  handleChange = (e) => {
    this.setState({ count: e.target.value });
  }

  render() {
    return (
      <div className="l-content">

        <Form inline>
              <FormControl type="text" placeholder="FizzBuzz Count" className="mr-sm-2" onChange={ this.handleChange } />
              <Button variant="outline-success"  onClick={this.updateTickets}>Generate</Button>
            </Form>
        {this.state.FizzBuzzData && this.state.FizzBuzzData.map((val, key) => {
          return <p key={key} className={typeof val === 'string' && "bold"}>{val}</p>
        })}
        {this.state.error && <p className="error">{this.state.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, {})(Home);
