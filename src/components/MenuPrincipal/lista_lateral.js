import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi'
import * as Io5Icons from 'react-icons/io5'

export const MenuLateralData = [
  {
    title: 'Tela principal',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'itensMenu'
  },
  {
    title: 'Meus Pedidos',
    path: '/MyOrders',
    icon: <BiIcons.BiListUl />,
    cName: 'itensMenu'
  },
  {
    title: 'Produtos',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'itensMenu'
  },
  {
    title: 'Categoria',
    path: '/category',
    icon: <Io5Icons.IoAppsSharp  />,
    cName: 'itensMenu'
  },
  {
    title: 'Sair',
    path: '/',
    icon: <BiIcons.BiExit />,
    cName: 'itensMenu'
  }
  
];



