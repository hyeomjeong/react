import React from 'react'
import './App.css';

class App extends React.Component{
  /*
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
  };
  */

  state = {
    count: 0
  };

  countUp = () => {
      this.setState({
        count: this.state.count + 1,
      });
  };

  render(){
    return(
      <div className="App">
        <div>{this.state.count}</div>
        <button className="upBTN" onClick={this.countUp}>UP</button>
      </div>
    );
  }
}

export default App;
