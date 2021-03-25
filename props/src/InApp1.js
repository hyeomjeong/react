import React , { Component } from "react";

export default class InApp1 extends Component{
    render() {
        return(
            <div>
                <p>PROPS → {this.props.count}</p>
                <button onClick={this.props.handleChange}>CLICK</button>
            </div>
        );
    }
}