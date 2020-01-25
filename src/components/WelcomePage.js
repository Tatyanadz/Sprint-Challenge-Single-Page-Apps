import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  color: black;
  text-decoration: none;
  background: #ffffff;
`;

export default function WelcomePage() {
  return (
    <div>
      <WelcomeDiv>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        /> 
        <Link to="/Characters">
          <Button>Characters</Button>
        </Link>
      </WelcomeDiv>
    </div>
  );
}

const WelcomeDiv = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
`;