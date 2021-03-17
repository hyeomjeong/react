import React , { Component } from "react";

export default class inApp3 extends Component{
    render() {
        return(
            <div>
                <p>IT IS LOWER-CASE PROPS → {this.props.count}</p>
                <button onClick={this.props.handleChange}>CLICK</button>
            </div>
        );
    }
}