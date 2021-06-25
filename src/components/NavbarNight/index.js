import React from 'react';
import { Nav, NavLink, NavIcon, Bars,Cart } from './styles';
import {Link}from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        
        <NavLink to='/Home'>Qualidade</NavLink>
        <Link to="/carrinho">
        <Cart/>
        </Link>
        <NavIcon onClick={toggle}>        
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
