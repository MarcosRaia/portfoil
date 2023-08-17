import React from "react";
import { styled } from "styled-components";

import Menu from "../../components/NavBar/navBar";
import BorderTitle from "../../components/BorderTitle/title";

import whats from '../../assets/whats.png';
import Telegram from '../../assets/Telegram.png';
import Gmail from '../../assets/Gmail.png';
import Card from "../../components/Card/card";
import ShakeImg from "../../components/shakeButton/shakeImg";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #DDDDDC;
    justify-content: flex-start;


    @media (min-width: 320px) and (max-width: 375px){
        height: 100%;
    }

    @media(min-width: 375px) and (max-width: 768px){
        height: 100%;
    }

    @media(min-width: 769px) and (max-width: 899px){
        height: 100%;
    }
`
const SubContainer = styled.article`
    width: 50%;
    margin-top: 10px;
    font-size: 40px;
    text-align: justify;
    font-family: 'Lilita One', cursive;

    @media(min-width: 320px) and (max-width: 375px){
        width: 90%;
        font-size: 19px;
        hyphens: auto;
    }

    @media(min-width: 375px) and (max-width: 768px){
        width: 90%;
        font-size: 19px;
        hyphens: auto;
    }

    @media(min-height: 768px) and (max-width: 1024px){

        font-size: 30px;
        hyphens: auto;

    }
`
const HighlightedText = styled.span`
  color: #ffc000;
  text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;
const Contact = () => {
    return <>
        <Menu />
        <Container>
            <BorderTitle title={'CONTACT'} />
            <SubContainer>
                <p>First of all I would like to <HighlightedText>Thank you</HighlightedText> for your time and curiosity about my curriculum.</p>
                <p>If you liked of what you have seen until now you can call or send me a message and we can talk. </p>
                <p>And if you have a suggestion to my website please hit me up on my gmail, I will be very glad.</p>
            </SubContainer>

            <Card columns = {3} gap = {20}>
                <ShakeImg imgSrc = {whats} />
                <ShakeImg imgSrc = {Telegram} />
                <ShakeImg imgSrc = {Gmail} />
            </Card>

        </Container>


    </>

}

export default Contact