import React from "react"
import styled  from "styled-components"

const Grid = styled.div`
    display: grid;
    width:100%;
    margin: auto;
    font-family: 'Lilita One', cursive;
    justify-items: center;
    grid-template-columns: ${props => `repeat(${props.columns}, 2fr)`};
    grid-gap: ${props => props.gap}px;


    @media(min-width: 320px) and (max-width: 375px){
        width: 85%;
        grid-template-columns: 1fr;
        grid-gap: 10px;

    }

    @media(min-width: 375px) and (max-width: 768px){
        grid-template-columns: 1fr;
        grid-gap: 10px;

    }

    @media(min-width: 768px) and (max-width: 900px){
        grid-template-columns: 1fr;
        grid-gap: 10px;
    }

    @media (min-width: 900px){
        margin-left: 15%;
        grid-template-columns: 2fr 2fr;
        grid-gap: 10px;
    }
`


const Card = (props) => {
    return <>
            
            <Grid columns={props.columns} gap={props.gap}>
                {props.children}
            </Grid>

            
    </>

}

export default Card;