import React, { Component } from "react";
import Super from "./Super.jpg";

class Superleggera extends Component {
  render() {
    return (
      <div>  
        <img src={Super} alt="Superleggera"></img>
        <p>Model: Superleggera</p>
      </div>
    );
  }
}

export default Superleggera;