import styled from "styled-components";

export const SectionContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;

  @media screen and (max-width: 768px) {
    height: 1100px;
    padding-top: 80px;
    justify-content: flex-start;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
    padding-top: 80px;
    justify-content: flex-start;
  }

  @media screen and (min-height: 800px) {
    height: 1200px;
  }

  @media screen and (min-height: 1200px) {
    height: 1400px;
  }
`;

export const SectionWrapper = styled.div`
  max-width: 1000px;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CardIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const SectionH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 40px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const CardH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const CardP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform: ${(props) =>
    props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const CardWrapper = styled.div`
  width: 280px;
  height: 280px;
`;

export const CardFaceFront = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  position: absolute;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`;

export const CardFaceBack = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  position: absolute;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
