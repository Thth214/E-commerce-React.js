
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 450px;
  border: 2px solid #000;
  margin-top: 10px;
  margin-right: 20px;
  border-radius: 15px;
  background-color: #b3e3ff;
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  &:before, 
  &:after{content: " ";
  display: table;
}
&:after{
  clear: both;
}
`;

export const Column = styled.div`
  float: left;
  padding: .25rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;

  @media only screen and(min-width:768px){
    width: ${props =>(props.grid ? props.grid/12*100:'8:33')}%;
  }
`;

export const ImageContainer = styled.div`
  display: block;
  border: 2px solid black;
  width: 100%;
  height: 100%;
  max-width:300px;
  max-height:300px;
  
  
`;

export const Image = styled.img`
display: block;
border: 2px solid black;
width: 100%;
height: 100%;
max-width:300px;
max-height:300px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Garamond";
  font-size: 25px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-family: "Garamond";
  font-size: 25px;
  text-align: center;
`;

export const Price= styled.p`
  font-family: "Garamond";
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  width: auto;
  margin-top: 15px;
  border-radius: 5px;
`;

export const Category= styled.p`
  font-family: "Garamond";
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  width: auto;
  margin-top: 20px;
  border-radius: 5px;
`;

