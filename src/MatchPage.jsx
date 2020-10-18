import React, { Component } from "react";
import { Card, Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const { Meta } = Card;

const Horizontal = styled.div`
  display: flex;
  align-items: center;
`;

const HorizontalMain = styled.div`
  display: flex;
`;

const Margins = styled.div`
  margin: 100px;
  margin-left: 300px;
  margin-right: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MarginN = styled.div`
  margin-right: 10px;
`;

const MarginY = styled.div`
  margin-left: 10px;
`;

export default class MatchPage extends Component {
  render() {
    return (
      <HorizontalMain>
        <Sidebar />
        <Margins>
          <h1>Find your workout buddies</h1>
          <Horizontal>
            <MarginN>
              <Button
                type="primary"
                shape="circle"
                icon={<CloseOutlined />}
                size="large"
                danger
              ></Button>
            </MarginN>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Name" />
            </Card>
            <MarginY>
              <Button
                type="primary"
                shape="circle"
                icon={<CheckOutlined />}
                size="large"
              ></Button>
            </MarginY>
          </Horizontal>
        </Margins>
      </HorizontalMain>
    );
  }
}
