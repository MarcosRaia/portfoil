import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import ShakeImg from "../shakeButton/shakeImg";

import eu from '../../assets/eu.jpeg';
import insta from '../../assets/insta.png';
import twitter from '../../assets/twitter.png';
import git from '../../assets/git.png';
import link from '../../assets/link.png'

const NavBar = styled.nav`
    
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    background-color: #F2BB13;
    


        @media (min-width: 320px) and (max-width: 768px){
            width: 100%;
            position: fixed;
            left: 0;
            top: 0;
            height: 75px;
            background-color: #F2BB13;
          }
        
        
          @media (min-width: 769px) and (max-width: 899px){
            width: 100%;
            position: fixed;
            left: 0;
            top: 0;
            height: 75px;
            background-color: #F2BB13;
          }      
    
`

const MenuContent = styled.div`
    font-family: 'Lilita One', cursive;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px auto;

    & > a {
        text-decoration: none;
        color: black;
        transition: color 0.3s;
        padding: 15px;
        flex-grow: 1;

        &:hover {
            color: white;
        }


    }

    @media (max-width: 375px), (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    @media (min-width: 769px) and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`;

const DropdownButton = styled.div`
    display: none;
    text-decoration: none;
    color: black;
    transition: color 0.3s;
    padding: 14px;
    flex-grow: 1;
    cursor: pointer;

    &:hover{
        color: white;
    }

    @media (min-width: 320px) and (max-width: 900px){
        display: block;
    }


`
const DropdownContent = styled.div`
    display: none;
    flex-direction: column;
    text-align: center;
    background-color: #F2BB13;

    @media (max-width: 375px){
        display: ${props => (props.open ? 'grid' : 'none')};
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        width:100%;
        justify-items: center;
    }

    @media (max-width: 768px){
        display: ${props => (props.open ? 'grid' : 'none')};
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        width:100%;
        justify-items: center;
      }
    

      @media (min-width: 769px) and (max-width: 1024px){
        display: ${props => (props.open ? 'grid' : 'none')};
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        width:100%;
        justify-items: center;
      }

    & > a{
        text-decoration: none;
        color: black;
        padding: 10px;

        &:hover{
            color: white;
        }
    }

`
const MediumSreenMenuContent = styled.div`
    font-family: 'Lilita One', cursive;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin: 10px auto;

    & > a {
        text-decoration: none;
        color: black;
        transition: color 0.3s;
        padding:16px;
        flex-grow: 1;

        &:hover{
            color:white;
        }
    }
`

const ProfileImage = styled.img`
    width: ${props => (props.large ? "200px" : "0px")};
`

const Menu = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showLinks, setShowLinks] = useState(window.innerWidth >= 900);

    useEffect(() => {
        const handleResize = () => {
            setShowLinks(window.innerWidth >= 900);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <>
        <NavBar>
            <ProfileImage src={eu} alt="" large={window.innerWidth >= 900} />
            {showLinks ? (
                <MediumSreenMenuContent>
                    <a href="/">HOME</a>
                    <a href="about">ABOUT ME</a>
                    <a href="resume">RESUME</a>
                    <a href="contact">CONTACT</a>

                    <a href="#"><ShakeImg imgSrc={insta} width="50px" /></a>
                    <a href="#"><ShakeImg imgSrc={twitter} width="50px" /></a>
                    <a href="#"><ShakeImg imgSrc={git} width="50px" /></a>
                    <a href="#"><ShakeImg imgSrc={link} width="50px" /></a>
                </MediumSreenMenuContent>
            ) : (
                <MenuContent>

                    <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)}>MENU</DropdownButton>

                    <DropdownContent open={dropdownOpen}>
                        <a href="/">HOME</a>
                        <a href="about">ABOUT ME</a>
                        <a href="resume">RESUME</a>
                        <a href="contact">CONTACT</a>

                        <a href="#"><ShakeImg imgSrc={insta} width="50px" /></a>
                        <a href="#"><ShakeImg imgSrc={twitter} width="50px" /></a>
                        <a href="#"><ShakeImg imgSrc={git} width="50px" /></a>
                        <a href="#"><ShakeImg imgSrc={link} width="50px" /></a>


                    </DropdownContent>

                </MenuContent>
            )}

        </NavBar>
    </>


}

export default Menu;