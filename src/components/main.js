import React, { Component } from "react";
import "../App.css";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import styled from "styled-components";

import Slider from "./slider";

const Repair = styled.div`
  color: #ffffff;
  font-family: Roboto;
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  span {
    display: block;
    font-size: 24px;
    line-height: 30px;
  }
`;

const Text = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  margin-top: 54px;
`;

const CallButton = styled.button`
  width: 245px;
  height: 64px;
  background-color: #ffa14b;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  margin-top: 32px;
`;

export default class Main extends Component {
  render() {
    return (
      <Row>
        <Col lg={5}>
          <Repair>
            Качественный ремонт<span>iphone за 35 минут и гарантия 1 год</span>
          </Repair>
          <Text>
            Оставьте заявку на бесплатную диагностику без очереди, и получите
            защитное стекло, стоимостью 1000 рублей, с установкой в подарок!
          </Text>
          <CallButton>Отправить заявку!</CallButton>
        </Col>
        <Col lg={6} lgOffset={1}>
          <Slider />
        </Col>
      </Row>
    );
  }
}