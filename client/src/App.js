import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron className="App-jumbotron">
          <h1>Welcome to Group Meeting Coordination App</h1>
          <p className="lead">
            Pick a place. Suggest some times. See who's free!
          </p>
          <p>
            <Button className="btn btn-primary" href="/add-event">Create Event</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
