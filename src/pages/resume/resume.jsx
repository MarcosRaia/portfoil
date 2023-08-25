import React from "react";
import Menu from "../../components/NavBar/navBar";
import Card from "../../components/Card/card";
import Skills from "../../components/skills/skillsCard";
import { styled } from "styled-components";
import BorderTitle from "../../components/BorderTitle/title";

import html from '../../assets/html.png'
import css from '../../assets/css.png'
import node from '../../assets/node.png'
import reactPhoto from '../../assets/reactPhoto.png'
import js from '../../assets/js.png'
import sass from '../../assets/sass.png'

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
`
const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #DDDDDC;
  justify-content: flex-start;
  height: 100vh;


  @media (min-width: 320px) and (max-width: 480px){
    height: 100%
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 100%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: auto; 
  }

  @media (min-width: 1025px){
    height: auto;
  }

`;


const CardContainer = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 320px) and (max-width: 480px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 481px) and (max-width: 768px){
        display:flex;
        flex-direction: column;
        align-items: center;
    }
`
const EducationTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-family: 'Lilita One', cursive;
  background-color: #f2bb13;
  width: 141px;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 141px;
  }

  @media (min-width: 900px) {
    
  }
`;
const JobTitle = styled.h3`

    width: 141px;
    font-family: 'Lilita One', cursive;
    background-color: #f2bb13;

    @media(min-width: 320px) and (max-width: 374px){
        display:flex;
        align-items: center;
        width: 141px;
        font-family: 'Lilita One', cursive;
        background-color: #f2bb13;

    }

    @media(min-width: 375px) and (max-width: 768px){
        display:flex;
        align-items: center;
        width: 141px;
        font-family: 'Lilita One', cursive;
        background-color: #f2bb13;

    }

    @media (min-width: 900px) {
        
      }
`
const SkillsTitle = styled.h3`
  display: flex;
  align-items: center;
  font-family: 'Lilita One', cursive;
  background-color: #f2bb13;
  width: 57px;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 57px;
  }

  @media (min-width: 900px) {
    
  }
`;


const Resume = () => {
    return <>
        <Menu />
        
        <Container>
        

            <CardContainer>
            <BorderTitle title={"RESUME"} />
               <EducationTitle>EDUCATION</EducationTitle>
            <Card columns={3} gap={50}>
                
                <Items>
    
                    <p>2019-2023 | Bachelor in Information Systems</p>
                    <p>Mackenzie Presbyterian University</p>
                    <p>In college, I was able to understand more about technology and computing, 
                    and so I realized that the best way to go is as a developer. In addition 
                    to college, I study daily to learn new technologies and find new paths.
                    </p>
                </Items>
                
                <Items>
                    <p>2015-2016 | Canadian High School</p>
                    <p>ST. James Collegiate</p>
                    <p>In my interchange I was able to improve my english to a high level
                        and learn about a new culture, making new friends from all parts
                        of the world.
                    </p>
                </Items>
                <Items>
                    <p>2023 - on course | GRADUATE STUDENT MBA DEVOPS ENGINEERING AND CLOUD SOLUTIONS</p>
                    <p>Mackenzie Presbyterian University</p>
                    <p>I am expect to learn more about DevOps to enfatize the team colaboration</p>
                    <p>Cloud Computing Expertise to develop my habilities to project, implant and maneger cloud service structures</p>

                </Items>
                                
            </Card>

            <JobTitle>JOB EXPERIENCE</JobTitle>
            <Card columns={1} gap={20}>
                <Items>
                    <p>2022-2023 | MACKENZIE Internship</p>
                    <p>Mackenzie Presbyterian University</p>
                    <p>I worked as a Developer at Mackenzie Presbyterian University.
                       My activities were working with front-end and back-end. 
                       The most widely used language was JavaScript using frameworks such as BootStrap, Materialize and MaterializeUI.
                       I also used React a lot in the creation of web applications.
                    </p>
                </Items>
                <Items>
                    <p>2023 | Bibliographic Production</p>
                    <p>Mackenzie Presbyterian University</p>
                    <p>M. L. Raia, A. G. Martins, G. P. A. Kas and M. A. Eliseo, 
                    "FruitSort: the educational computational thinking game with accessibility for hearing-impaired children," 
                    2023 18th Iberian Conference on Information Systems and Technologies (CISTI),
                    Aveiro, Portugal, 2023, pp. 1-6, doi: 10.23919/CISTI58278.2023.10211961.
                    </p>
                </Items>         
            </Card>
            
            <SkillsTitle>SKILLS</SkillsTitle>
            </CardContainer>
            <Skills>
                <Items> <img src={node} alt={"node"} /> </Items>
                <Items> <img src={html} alt={"html"} /> </Items> 
                <Items> <img src={reactPhoto} alt={"reactPhoto"} /> </Items> 
                <Items> <img src={css} alt={"css"} /> </Items> 
                <Items> <img src={sass} alt={"sass"} /> </Items>
                <Items> <img src={js} alt={"js"} /> </Items>
            </Skills>
        </Container>




    </>

}

export default Resume;
