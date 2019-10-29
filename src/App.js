import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : 0
    }
    this.updateNumber = this.updateNumber.bind(this)
  }
  
  updateNumber(){
    this.setState({
      value : this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.value}</span>
        <button id="inc" onClick={this.updateNumber}>Incrementa</button>
      </div>
    );
  }
}

export default App;
