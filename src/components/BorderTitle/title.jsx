import React from "react";
import { styled } from "styled-components";

const Title = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    border: dotted;
    font-size: 70px;
    width: 50%;
    margin-top: 50px;

    & > h1 {
        letter-spacing: 15px;
        font-family: 'Lilita One', cursive;
    }

    @media (min-width: 320px) and (max-width: 374px){
        font-size: 22px;
        margin-top: 30%;

        & > h1 {
            letter-spacing: 3px;
            
        }
    }

    @media (min-width: 375px) and (max-width: 499px){
        font-size: 22px;
        margin-top: 20%;

        & > h1 {
            letter-spacing: 3px;
            
        }
    }

    @media (min-width: 500px) and (max-width: 699px){
        font-size: 22px;
        margin-top: 15%;

        & > h1 {
            letter-spacing: 3px;
            
        }
    }

    @media (min-width: 700px) and (max-width: 768px){
        font-size: 22px;
        margin-top: 14%;

        & > h1 {
            letter-spacing: 3px;
            
        }
    }
    

    @media (min-width: 769px) and (max-width: 1024px){
        font-size: 40px;
        margin-top: 14%;
        width: 46%;

        & > h1 {
            letter-spacing: 10px;
            
        }
    }

    @media (min-width: 1025px){
        font-size: 55px;
        margin-top: 5%;
        width: 49%;

        & > h1 {
            letter-spacing: 10px;
            
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