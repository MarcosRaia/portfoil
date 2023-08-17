import React from 'react';
import styled from 'styled-components';
import eu from '../../assets/eu.jpeg';
import { Link } from 'react-router-dom';

const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 20px;
  align-items: center;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 320px),
         (max-width: 375px),
         (max-width: 768px),
         (max-width: 1024px) {
    overflow-y: auto;
    grid-template-columns: 1fr;
  }
`;

const InfoContainer = styled.div`
  padding: 20px;
`;

const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 320px) {
    order: -1;
    width: 100%;
    height: 60vh;
  }

  @media (max-width: 375px) {
    order: -1;
    width: 100%;
    height: 75vh;
  }

  @media (max-width: 768px) {
    order: -1;
    width: 100%;
    height: 80vh;
  }

  @media (max-width: 1024px) {
    order: -1;
    width: 100%;
    height: 80vh;
  }
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 320px),
         (max-width: 768px),
         (max-width: 1024px),
         (max-width: 1280px),
         (max-width: 1440px),
         (max-width: 1680px),
         (max-width: 1920px) {
    position: relative;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    max-width: none;
  }
`;

const Title = styled.p`
  font-family: 'Lilita One', cursive;
  font-size: 40px;
`;

const Name = styled.p`
  font-family: 'Lilita One', cursive;
  font-size: 50px;
`;

const HighlightedText = styled.span`
  color: #FDE795;
`;

const Layer = styled.p`
  background-color: #F2BB13;
  font-family: 'Lilita One', cursive;
  width: 222px;
`;

const Text = styled.p`
  font-family: 'Lilita One', cursive;
  color: #424342;
`;

const Button = styled.button`
  margin-top: 30px;
  border-radius: 5px;
  border-color: #fde795;
  height: 40px;
  width: 140px;
  background-color: #f2bb13;
  font-family: 'Lilita One', cursive;
`;

const Home = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>HI THERE!</Title>
        <Name> I´M <HighlightedText> MARCOS</HighlightedText> </Name>
        <Layer>PROFESSIONAL IT / DEVELOPER</Layer>
        <Text> A developer passionate about technology and innovation. My Bachelor's degree in Information Systems from Mackenzie Presbyterian University has provided me with solid knowledge for my career.</Text>
        <Link to={"/about"}>
          <Button>MORE ABOUT ME</Button>
        </Link>
      </InfoContainer>
      <ImgContainer>
        <Img src={eu} alt="" />
      </ImgContainer>
    </Container>
  );
}

export default Home;