import React from "react";
import styled from "styled-components";

const Div = styled.div`

  background-color: lightblue;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  border-radius: 14px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;

  & > form > label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-size: 20px;
  }

  & > form > button {
    display: block;
    font-size: 20px;
    letter-spacing: 1px;
    margin-top: 1rem;
    padding: 10px 50px 10px;
    outline: 0;
    border: 0.1px solid black;
    border-radius: 13px;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
  }

  & > form > button:hover{
    background-color: aliceblue;
  }

  & > form > button:active{
    background-color: rgb(54, 132, 181);
    color: white;
  }

  & > form > input {
    width: 99%;
    height: 28px;
    font-size: 20px;
    text-indent: 3px;
    border-radius: 6px;
  }
`;

const Card = (props) => {
  return <Div>{props.children}</Div>;
};

export default Card;
