import React from "react";
import styled from "styled-components";


import Menu from "../../components/NavBar/navBar";
import webdev from '../../assets/webdev.png';
import backend from '../../assets/backend.png';
import update from '../../assets/update.png';
import BorderTitle from "../../components/BorderTitle/title";




const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #DDDDDC;

    @media (min-width: 320px) and (max-width: 374px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #DDDDDC;
    }

    @media (min-width: 375px) and (max-width: 499px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #DDDDDC;
    }

    @media (min-width: 500px) and (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #DDDDDC;
    }

    @media (min-width: 769px) and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #DDDDDC;
    }

    @media (min-width: 770px) and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #DDDDDC;
    }
`

const SubContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    margin: auto;

    & > div > h3{
        font-family: 'Lilita One', cursive;
        margin-bottom: 10px;
    }

    @media (max-width: 1024px){
        padding: 0 0 0 20px;
    }

`


const SectionContaineir = styled.div`
    font-family: 'Lilita One', cursive;
    width: 50%;

    & > h3{
    background-color: #f2bb13;
    width: 147px;
    font-size: 27px;
    }

    @media (max-width: 320px){
        width: 100%;
    }

    @media (max-width: 375px){
        width: 100%;
    }

    @media (max-width: 768px){
        width: 100%;
    }


`

const StyledSection = styled.section`
    display: flex;
    margin: 20px auto;
    flex-direction: column;
    margin-top: 20px;
    font-family: 'Lilita One', cursive;
    
    & > h2{
        background-color: #f2bb13;
        width: 57%;
    }

    @media (min-width: 320px) and (max-width: 374px){
        & > h2 {
            width:64%;
            font-size: 21px;
            text-align: justify;
            } 
    
            & > p {
                padding: 2px;
                text-align: justify;
                hyphens: auto;
            }
    }


    @media(min-width: 375px) and (max-width: 499px){
        & > h2 {
        width:64%;
        font-size: 21px;
        text-align: justify;
        } 

        & > p {
            padding: 2px;
            text-align: justify;
            hyphens: auto;
        }
    }

    @media (min-width: 500px) and (max-width: 768px){
        & > h2 {
        width:64%;
        font-size: 21px;
        text-align: justify;
        } 

        & > p {
            padding: 2px;
            text-align: justify;
            hyphens: auto;
        }
    }

    @media (min-width: 769) and (max-width: 1024px){
        & > h2 {
            width:64%;
            font-size: 21px;
            text-align: justify;
            } 
    
            & > p {
                padding: 2px;
                text-align: justify;
                hyphens: auto;
            }
    }

`
const ListItems = styled.ul`
    display: flex;
    flex-direction: column;
    

    & > li{
        display: flex;
        align-items: center;
        margin-bottom: 30px;
    }

`



const About = () => {
    return <>

        <Container>
            <Menu />
            
            <BorderTitle title='ABOUT' />
            <SubContainer>

                <SectionContaineir>
                    <StyledSection>
                        <h2>I´M MARCOS RAIA, PROFESSIONAL IT / DEVELOPER</h2>
                        <p>Developer who is passionate about technology and innovation. My bachelor's degree in information
                            systems from Presbyterian University Mackenzie provided me with unique knowledge for my career.
                            During my time as a Developer at the same company, I worked on front-end and back-end projects,
                            utilizing JavaScript and well-known frameworks such as BootStrap and Materialize. This experience
                            enabled me to design appealing and functional interfaces for online applications.
                            Apart from my commitment to software development, I am always seeking personal development.
                            Outside of my professional environment, I diversify my interests to keep my mind creative and inspired.
                        </p>
                    </StyledSection>
                    <h3>WHAT I DO?</h3>
                    <ListItems>
                        <h3>Web Development</h3>
                        <li>
                            <img src={webdev} alt="" /><p>Translate designs into code using languages such as HTML, CSS and JavaScript.
                            Create interactive, responsive and visually attractive user interfaces.
                            Implement animations, visual effects and interactive elements.</p>
                        </li>
                        <h3>Back-end Development</h3>
                        <li>

                            <img src={backend} alt="" /><p>Create the operating logic of applications and websites.
                                Manage databases and connections to servers.
                                Implement business logic and data processing on the server side.</p>
                        </li>
                        <h3>Maintence and Update</h3>
                        <li>

                            <img src={update} alt="" /><p>Perform continuous maintenance, bug fixes, and updates to keep projects working perfectly.</p>

                        </li>
                    </ListItems>
                </SectionContaineir>
            </SubContainer>
        </Container>
    </>
}
export default About;