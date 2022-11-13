import React, { Component } from "react";
class Clock extends Component  {
    constructor(props){
        super(props);
        //this section below declares the state of time at the very beginning
        this.state ={
            time: new date().toLocalTimeString()
        }
    }
//This happens when the component mountsd and the setinterval
function get called with a call back function updateClock()
componentDidMount(){
    this.intervalID = setInterval(() =>
    this.updateClock(),
    1000);}
}