import React, { Component } from "react";
import { Card, Button, Avatar } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

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
        <Margins>
          <h1>Your Matches</h1>
          <Horizontal>
            <MarginN>
              
            <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                
                actions={[
                
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
             <Meta
            title="username"
            />
            </Card>
            </MarginN>

            <MarginY>
            <MarginN>

            <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
               
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
             <Meta
            title="username"
            />
            </Card>
            </MarginN>

            </MarginY>
            <MarginY>
            <MarginN>

            <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
               
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
             <Meta
            title="username"
            />
            </Card>
            </MarginN>
            </MarginY>
            
          </Horizontal>
        </Margins>
      </HorizontalMain>
    );
  }
}
