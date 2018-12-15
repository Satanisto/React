import React, { Component } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  color: ${props => (props.active ? "pink" : "white")};
  fonr-size: 14px;
  font-weight: 300;
  line-height: 24px;
  padding-right: 33px;
  border-right: 1px solid white;

  &: hover {
    color: #8d8d8d;
    text-decoration: none;
  }
  &: last-child {
    border-right: none;
  }
`;

export default class Link extends Component {
  render() {
    return <StyledLink href={this.props.link}> {this.props.text} </StyledLink>;
  }
}
