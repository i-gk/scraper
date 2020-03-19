import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      greeting: '',
      name: ''
    }
  }

  handleChange(event) {
    this.setState({name: event.target.value});  
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="name">Enter your name: </label>
              <input
                id="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
              />
              <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
