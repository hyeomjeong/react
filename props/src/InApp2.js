import React , { Component } from "react";

export default class InApp2 extends Component{
    state = {
        count: this.props.count
    };

    handleChange = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return(
            <div>
                <p>CHANGE → {this.state.count}</p>
                <button onClick={this.handleChange}>CLICK</button>
            </div>
        );
    }
}