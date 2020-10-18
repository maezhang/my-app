import React, { useEffect, useRef, useState} from 'react';
import styled from "styled-components";

// POOJANS KEY: /Users/jonathanke/Downloads/googleCloudKey/google_compute_engine
// ssh -i /Users/jonathanke/Downloads/googleCloudKey/google_compute_engine ppalwai@34.72.70.68

const Margins = styled.div`
  margin: 100px;
  margin-left: 300px;
  margin-right: 300px;
`;

function ProfilePage(props) {
  let URLParse = new URLSearchParams((new URL(window.location.href)).search);
  console.log(window.location.href);
  const username = URLParse.get("user");
  console.log(username);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [info, setInfo] = useState(null);

  

  useEffect(() => {
      fetch('http://127.0.0.1:5000/infoUser'+'?user='+username, 
      {
        method:"POST",
        cache: "no-cache",
        headers:{
            "content_type":"application/json",
        },
        body:JSON.stringify({name : 'joy'})
        })
          .then(res => {
              console.log("Result:");
              console.log(res);
              return res.json();
            })
          .then((res) => 
              {
                console.log("Parsed return...");
                setInfo(res);
                setIsLoaded(true);
              },
              // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                    setIsLoaded(true);
                    setError(error);
              })});
    
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded){
    return <div>Loading...</div>
  } else {
    return (
      <Margins>
        <div>
          <h1 id="profile-title">About Me</h1>
          <p id= "name">Name: {info.first} {info.last}</p>
          <p>Email: {info.email}</p>
          <p></p>
        </div>  
      </Margins>
    );
  } 
}

export default ProfilePage;