import React from "react";
import { styled } from "styled-components";

const SkillCard = styled.div`
    display:flex;
    margin: auto;
    justify-items: center;


    @media (min-width: 320px) and (max-width: 899px){
        flex-direction: column;
        overflow-y: auto;
        height: 25vh;
    }

    @media (min-width: 899px) and (max-width: 1023px){
        display: flex;
        overflow-x: auto;
        width: 50%
    }

    @media (min-width: 1024px) and (max-width: 1260px){
        display: flex;
        overflow-x: auto;
        width: 50%;
    }

    @media (min-width: 1260px) and (max-width: 1496px){
        display: flex;
        overflow-x: auto;
        width: 35%;
    }

    @media (min-width: 1497px) and (max-width: 1733px){
        display: flex;
        overflow-x: auto;
        width: 35%;
    }

    @media (min-width: 1734px) and (max-width: 1880px){
        display: flex;
        overflow-x: auto;
        width: 35%;
    }

`


const Skills = (props) => {
    return <>
        <SkillCard>
            <img src={props.image} alt={props.description} />
            {props.children}
        </SkillCard>
    </>
}

export default Skills;