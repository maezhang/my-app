import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const Divider = styled.div`
  border-right-style: solid;
  border-width: 1px;
  border-color: #d9d9d9;
  flex-grow: 1;
`;

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectedTab = styled.span`
  display: flex;
  flex-grow: 1;
  border-right-style: solid;
  background-color: #e6f7ff;
  color: #1890ff;
`;

//my profile, my matches, find buddies
function Sidebar(props) {
  let history = useHistory();

  let goToProfile = () => {
    history.push("/profile");
  };

  let goToMatches = () => {
    history.push("/matches");
  };

  let findBuddies = () => {
    history.push("/matching");
  };

  //   let P1 = Button;
  //   let P2 = Button;
  //   let P3 = Button;

  //   const [currentPage] = useState(props);
  //   if (currentPage == "1") P1 = SelectedTab;
  //   else if (currentPage == "2") P2 = SelectedTab;
  //   else P3 = SelectedTab;

  return (
    <Divider>
      <Vertical>
        <br />
        <h1>FitMatch</h1>
        <br />
        <Button onClick={goToProfile} type="link" size="large">
          My profile
        </Button>
        <Button onClick={goToMatches} type="link" size="large">
          My matches
        </Button>
        <Button onClick={findBuddies} type="link" size="large">
          Find buddies
        </Button>
      </Vertical>
    </Divider>
  );
}

export default Sidebar;
