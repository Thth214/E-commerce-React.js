import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #0a070e;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color:#0a070e;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(AiOutlineMenu)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

export const Cart = styled(FaShoppingCart)`
font-size: 2rem;
transform: translate(-50%, -15%);
align-self: center;
 margin-left: 3rem;
 margin-top: 1.7rem;
 cursor: pointer;
 
`;
