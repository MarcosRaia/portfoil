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

    @media (min-width: 320px) and (max-width: 375px),
           (min-width: 375px) and (max-width: 768px),
           (min-width: 768px) and (max-width: 1024px),
           (min-width: 1024px) and (max-width: 1880px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #DDDDDC;
    }

    @media (min-width: 1024px) and (max-width: 1880px){
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

    @media (min-width: 320px) and (max-width: 375px){
        padding: 0 8px 0 8px;
    }
    @media (min-width: 375px) and (max-width: 768px){
        padding: 0 8px 0 8px;
    }
    
    @media (min-width: 768px) and (max-width: 899px){
        padding: 0 8px 0 8px;
    }

    @media (min-width: 900px) and (max-width: 1024px){
        margin-left: 1em;
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

    @media (min-width: 320px) and (max-width: 375px){
        width: 100%;
    }

    @media (min-width: 375px) and (max-width: 768px){
        width: 100%;
    }

    @media (min-width: 768px) and (max-width: 899px){
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
        display: flex;
        justify-content: center;
        background-color: #f2bb13;
        width: 100%;
        font-size: 22px;
    }

    & > p {
        text-align: justify;
        hyphens: auto;
        padding: 2px;
    }

    @media (min-width: 320px) and (max-width: 480px){
        & > h2 {
            width:100%;
            font-size: 21px;
            text-align: justify;
            } 
    
            & > p {
                padding: 2px;
                text-align: justify;
                hyphens: auto;
            }
    }
    @media (min-width: 481px) and (max-width: 768px){
        & > h2 {
            width:100%;
            font-size: 21px;
            text-align: center;
            } 
    
            & > p {
                padding: 2px;
                text-align: justify;
                hyphens: auto;
            }
    }

    @media (min-width: 769px) and (max-width: 899px){
        & > h2 {
            width:100%;
            font-size: 21px;
            text-align: center;
            } 
    
            & > p {
                padding: 2px;
                text-align: justify;
                hyphens: auto;
            }
    }

    @media (min-width: 900px) and (max-width: 1024px){
        & > h2 {
            width:100%;
            font-size: 21px;
            text-align: center;
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
        text-align: justify;
        hyphens: auto;
    }

`



const About = () => {
    return <>

        <Container>
            <Menu />
            
            
            <SubContainer>

                <SectionContaineir>
                <BorderTitle title='ABOUT' />
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