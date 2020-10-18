import React from 'react';
import styled from "styled-components";

// POOJANS KEY: /Users/jonathanke/Downloads/googleCloudKey/google_compute_engine
// ssh -i /Users/jonathanke/Downloads/googleCloudKey/google_compute_engine ppalwai@34.72.70.68

class ProfilePage extends React.Component {

    constructor(props){
        let URLParse = new URLSearchParams(this.props.location.search);
        this.state = {
            username : URLParse.get("username"),
            isLoaded: false,
            error: null
        };
    }

    componentDidMount() {
        fetch('http://34.72.70.68:8080/infoUser'+'?user='+this.state.username, 
          {'mode':'no-cors'})
            .then(res => res.json())
            .then((result) => 
                {
                    console.log(result);
                    this.setState({
                        isLoaded : true,
                        username : this.state.username,
                        info : result,
                    });
                },
                // Note: it's important to handle errors here
                 // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                      this.setState({
                      isLoaded: true,
                      error: error
                    });
                });
    }

    render() {
        const error = this.state.error ;
        const isLoaded = this.state.isLoaded;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          const info = this.state.info
          return (
            <div>
              <p id="profile-title">About Me</p>
              <p id= "name"><\p>
            
            </div>  
          );
        }
    }
}