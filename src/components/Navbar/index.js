import React from 'react';
import { Nav, NavLink, NavIcon, Bars,Cart } from './styles';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/Home'>Qualidade</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
