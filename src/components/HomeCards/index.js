import React from 'react';
import {
  CategoryContainer,
  CategoryWrapper,
  CategoryHeading,
  CategoryTitle,
  CategoryCard,
  CategoryImg,
  CategoryInfo,
  CategoryDesc,
  CategoryButton
} from './CategoryElements';

const Cards = ({ heading, data }) => {
  return (
    <CategoryContainer>
      <CategoryHeading>{heading}</CategoryHeading>
      <CategoryWrapper>
        {data.map((categorys,index) => {
          return (
            <CategoryCard key={index}>
              <CategoryImg src={categorys.img} alt={categorys.name} />
              <CategoryInfo>
                <CategoryTitle>{categorys.name}</CategoryTitle>
                <CategoryDesc>{categorys.desc}</CategoryDesc>
                <CategoryButton>Ver Mais</CategoryButton>
              </CategoryInfo>
            </CategoryCard>
          );
        })} 
      </CategoryWrapper>
    </CategoryContainer>
  );
};

export default Cards;
