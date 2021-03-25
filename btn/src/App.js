import React from 'react'

class App extends React.Component{
  state = {
    isClicked: false
  };

  clicked = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  render(){
    return(
      <div className="App">
        <div>HEY</div>
        <button onClick={this.clicked} className="btn">{this.state.isClicked ? "BYE" : "HELLO"}</button>
      </div>
    );
  }
}

export default App;