import styled from 'styled-components';

export const CategoryContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #0a070e;
  color: #fff;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const CategoryCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const CategoryImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const CategoryHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const CategoryTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const CategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const CategoryDesc = styled.p`
  margin-bottom: 1rem;
`;

export const CategoryButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
