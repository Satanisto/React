import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Menu from "./components/menu";
import Main from "./components/main";

import Grid from "react-bootstrap/lib/Grid";
import styled from "styled-components";

const url = process.env.PUBLIC_URL + "/img/bg.png";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`;

const MenuWrapper = styled.div`
  height: 89px;
  padding-top: 21px;
`;

const MainWrapper = styled.main`
  height: 600px;
  padding-top: 130px;
  background-image: url(${url});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper>
          <Grid>
            <Header />
          </Grid>
        </HeaderWrapper>
        <MenuWrapper>
          <Grid>
            <Menu />
          </Grid>
        </MenuWrapper>
        <MainWrapper>
          <Grid>
            <Main />
          </Grid>
        </MainWrapper>
      </div>
    );
  }
}
