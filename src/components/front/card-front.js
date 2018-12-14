import React, { Component } from "react";

export default class CardFront extends Component {
  render() {
    return (
      <div className="card-side side-front">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">
              <img src="https://www.w3schools.com/w3css/img_lights.jpg" />
            </div>
            <div className="col-xs-6 side-front-content">
              <h2>Alex</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda, libero odit iste dolores ratione velit facere
                architecto autem expedita debitis repudiandae a, impedit non
                voluptatem ullam nemo. Voluptates, aspernatur numquam?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
