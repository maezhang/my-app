import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "antd";

const Divider = styled.div`
  border-right-style: solid;
  border-width: 1px;
  border-color: #d9d9d9;
  flex-grow: 1;
`;

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
`;

//my profile, my matches, find buddies
export default class Sidebar extends Component {
  render() {
    return (
      <Divider>
        <Vertical>
          <Button type="link">My profile</Button>
          <Button type="link">My matches</Button>
          <Button type="link">Find buddies</Button>
        </Vertical>
      </Divider>
    );
  }
}
