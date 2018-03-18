import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import { stringify, parse } from "query-string";

import Header from "./Header";

const Body = styled.div`
  height: 100vh;
  width: 1;
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
  * + * {
    margin-left: 40px;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    const { color1, color2 } = parse(this.props.location.search);
    this.state = {
      color1: color1 || "white",
      color2: color2 || "white"
    };
  }

  updateURL = () => {
    const { color1, color2 } = this.state;

    this.props.history.replace({
      pathname: "/",
      search: stringify({
        color1,
        color2
      })
    });
  };

  updateInput1 = value => {
    this.setState(
      {
        color1: value
      },
      this.updateURL
    );
  };
  updateInput2 = value => {
    this.setState(
      {
        color2: value
      },
      this.updateURL
    );
  };

  render() {
    const { color1, color2 } = this.state;
    return (
      <Body
        style={{
          background: `linear-gradient(${color1}, ${color2})`
        }}
      >
        <Header />

        <input
          type="text"
          value={this.state.color1}
          placeholder="enter first color"
          onChange={e => this.updateInput1(e.currentTarget.value)}
        />
        <input
          type="text"
          value={this.state.color2}
          placeholder="enter second color"
          onChange={e => this.updateInput2(e.currentTarget.value)}
        />
      </Body>
    );
  }
}

export default App;
