import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { withRouter } from "react-router";


const Margins = styled.div`
  margin: 100px;
  margin-left: 300px;
  margin-right: 300px;
`;



function HomePage() {
  let history = useHistory();

  function handleClick() {
    history.push('/register');
  };

  return (
      <Margins>
        <h1>Login</h1>
        <button onClick={handleClick}>
          Register now!
        </button>
      </Margins>
    );
}

//export default HomePage;
export default withRouter(HomePage);



/*
let history = useHistory();

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {clicked : false};
  }


  goToRegistration = () => {
    history.push("/register");
    this.setState({clicked : false});
  };

  render() {
    return (
      <Margins>
        <h1>Login</h1>
        <Button onClick={this.goToRegistration}>Register now!</Button>
      </Margins>
    );
  }
}

*/
