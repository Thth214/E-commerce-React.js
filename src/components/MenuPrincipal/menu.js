import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MenuLateralData } from './lista_lateral';
import './menu.css';
import { IconContext } from 'react-icons';

function Menu() {
  const [MenuLateral, setMenuLateral] = useState(false);

  
  const showMenuLateral = () => setMenuLateral(!MenuLateral);

 
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='menuSuperior'>
          <Link to='#' className='iconPrincipal'>
            <FaIcons.FaBars onClick={showMenuLateral} />
          </Link>
          <Link to='/carrinho' className='iconCart'>
            <AiIcons.AiOutlineShoppingCart />
          </Link>
         

        </div>
        <nav className={MenuLateral ? 'menuSecundario active' : 'menuSecundario'}>
          <ul className='menuSecundario-items' onClick={showMenuLateral}>
            <li className='botaoFechar'>
              <Link to='#' className='iconFechar' >
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {MenuLateralData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <div className='nomePagina'>{item.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Menu;