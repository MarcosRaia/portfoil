import React from "react";
import { styled } from "styled-components";

import Menu from "../../components/NavBar/navBar";
import BorderTitle from "../../components/BorderTitle/title";
import Skills from "../../components/skills/skillsCard";


import whats from '../../assets/whats.png';
import Telegram from '../../assets/Telegram.png';
import Gmail from '../../assets/Gmail.png';
import insta from '../../assets/insta.png';
import twitter from '../../assets/twitter.png';
import git from '../../assets/git.png';
import link from '../../assets/link.png'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #DDDDDC;
    justify-content: flex-start;


    // @media (min-width: 320px) and (max-width: 480px){
        
    // }

    // @media(min-width: 481px) and (max-width: 768px){
    //     height: 100%;
    // }

    // @media(min-width: 769px) and (max-width: 1024px){
    //     height: auto;
    // }

    // @media (min-width: 1025px){
    //     height: auto;
    // }
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

    @media(min-width: 1024px){
        font-size: 30px;
    }
`
const HighlightedText = styled.span`
  color: #ffc000;
  text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

const Items = styled.div`
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

            <Skills>
                <Items><img src={whats} alt="" /></Items>
                <Items><img src={Telegram} alt="" /></Items>
                <Items><img src={Gmail} alt="" /></Items>
                <Items><img src={insta} alt="" /></Items>
                <Items><img src={twitter} alt="" /></Items>
                <Items><img src={git} alt="" /></Items>
                <Items><img src={link} alt="" /></Items>
                
            </Skills>

        </Container>


    </>

}

export default Contact