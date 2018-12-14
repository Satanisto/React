import React, { Component } from "react";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'
import CardFront from "./components/front/card-front";
import CardBack from "./components/back/card-back";

export default class App extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <CardBack />  
          <CardFront />
        </div>
      </div>
    );
  }
}
