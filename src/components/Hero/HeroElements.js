import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("https://previews.123rf.com/images/chuyu/chuyu1501/chuyu150100053/35484072-gebrochen-geh%C3%A4rtetem-glas-closeup-hintergrund-glas-war-zertr%C3%BCmmert.jpg");
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
   font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #ff6000;
  letter-spacing: 3px;
  font-family: 'Merriweather', serif;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  font-family: 'Merriweather', serif;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: purple;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ff6000;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
