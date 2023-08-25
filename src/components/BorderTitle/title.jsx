import React from "react";
import { styled } from "styled-components";

const Title = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  border: dotted;
  font-size: 70px;
  margin-top: 50px;

  & > h1 {
    letter-spacing: 15px;
    font-family: 'Lilita One', cursive;
  }

  @media(min-width: 320px) and (max-width: 480px){
    font-size: 22px;
    margin-top: 5em;

    & > h1{
        letter-spacing: 3px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px){
    font-size: 22px;
    margin-top: 5em;

    & > h1{
        letter-spacing: 3px;
    }
  }

  @media (min-width: 768px) and (max-width: 899px){
    font-size: 22px;
    margin-top: 5em;

    & > h1{
        letter-spacing: 3px;
    }
  }

  @media (min-width: 900px) and (max-width: 1024px){
    font-size: 2em;
    margin-top: 1em;

    & > h1{
        letter-spacing: 3px;
    }

  }
  
`;

const BorderTitle = (props) => {
    return (
        <Title>
            <h1>{props.title}</h1>
        </Title>
    );
};

export default BorderTitle;