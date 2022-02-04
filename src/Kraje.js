import React, { Component } from "react";
import Nav from "./components/Nav";
import Map from "./components/Map" 
import Os_czasu from "./components/Os_czasu"
import './kraje.css'


class Kraje extends Component{
    render(){
        return(
        <div >
            <Nav />
            <Map />
            <Os_czasu />
        </div>
    )}
}

export default Kraje