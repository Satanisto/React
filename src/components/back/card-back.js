import React, { Component } from "react";
import CardButton from "./card-button";
import CardTextarea from "./card-textarea";
import CardLinks from "./card-links";
import CardInput from "./card-input";

export default class CardBack extends Component {
  render() {
    return (
      <div className="card-side side-back">
        <div className="container-fluid">
          <h1>Header</h1>
          <form formAction="#" className="card-form">
            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="firstName"
                  id="firstName"
                  placeholder={"Enter your first name"}
                />
              </div>
              <div className="col-xs-6">
                <CardInput
                  name="lastName"
                  id="lastName"
                  placeholder={"Enter your last name"}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="email"
                  id="email"
                  type="email"
                  placeholder={"Enter your email"}
                />
              </div>
              <div className="col-xs-6">
                <CardInput
                  name="subject"
                  id="subject"
                  placeholder={"Enter your subject"}
                />
              </div>
            </div>
            <CardTextarea
              name="message"
              id="message"
              placeholder={"Enter your message"}
            />
            <CardButton className="btn btn-primary" type="submit" value='Send'/>
          </form>
          <CardLinks />
        </div>
      </div>
    );
  }
}
