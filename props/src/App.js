import React, { Component } from 'react';
import InApp1 from './InApp1';
import InApp2 from './InApp2';
import inApp3 from './inApp3';

export default class App extends Component{
  state = {
    count: 0,
  };

  handleChange = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render(){
    return(
      <div className="App">
        <div className="props">
          <p>INDEX PROPS</p>
          <span>{this.props.message}</span>
        </div>
        <div className="state-btn">
          <p>STATE → {this.state.count}</p>
          <button onClick={this.handleChange}>CLICK</button>
        </div>

        <div className="inside-app-props">
          <p>APP PROPS</p>
          <InApp1 
            count={this.state.count}
            handleChange={this.handleChange} 
          />
        </div>

        <div className="change-inside-app-props">
          <p>OTHER APP PROPS</p>
          <InApp2 
            count={this.state.count}
            handleChange={this.handleChange}
          />
        </div>

        <div className="lower-case-props">
          <p>LOWER</p>
          <inApp3 
            count={this.state.count}
            handleChange={this.handleChange} 
          />
        </div>

      </div>
    );
  }
}