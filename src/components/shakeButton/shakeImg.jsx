import React from "react";
import { styled } from "styled-components";

const Shake = styled.div`
    background-color: #f2f2f2;
    padding: 10px;
    margin:10px;
    border-radius: 5px;
    cursor: pointer;
    text-align:justify;
    transition: transform 0.3s ease-in-out;

    &:hover{
        animation: shake 0.5s ease infinite;
    }

    @keyframes shake{
        0%, 100%{
            transform: translateX(0);
        }
        10%, 30%, 50%, 70%, 90%{
            transform: tarnslateX(-5px);
        }
        20%, 40%, 60%, 80%{
            transform: translateX(5px);
        }
    }
`

const ShakeImg = (props) => {
    return<>
        <Shake>
            <img src={props.imgSrc} width={props.width} />
            {props.children}
        </Shake>
    </>

}

export default ShakeImg;