import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Group Meeting Coordination App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <h1>Welcome to Group Meeting Coordination App</h1>
          <p className="lead">
            Pick a place. Suggest some times. See who's free!
          </p>
          <p className="lead">
            <Button color="primary" href="/add-event">Create Event</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
