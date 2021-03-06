import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Navigation from "./components/Navigation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerData: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
    .then(response => this.setState({
      playerData: response.data
    }))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className = "App">
        <Navigation />
        <div className = "title">
        <h2>Players</h2>
        </div>
      <div className = "players">
        {this.state.playerData.map(player => (
          <div className = "playercard">
            <h3>Name: {player.name}</h3>
            <p>Country: {player.country}</p>
            <p>Searches: {player.searches}</p>
          </div>
        ))}
      </div>
      </div>
    )
  }
}

export default App;
