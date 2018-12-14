import React, { Component } from "react";

export default class CardLinks extends Component {
  render() {
    const profileLinks = ["twitter", "linkedin", "dribbble", "facebook"];

    const linksList = profileLinks.map((link, index) => 
      <li key={index}>
        <a href="#">
          <i className={`fa fa-${link}`} />
        </a>
      </li>
    );
    return (
      <div className="card-social-links">
        <ul className="social-links">{linksList}</ul>
      </div>
    );
  }
}
