
import React,{useContext} from "react";
import "./cardProduto.css";
import {CartContext} from '../../contexts/CartContext/index'


const ProductCard = (props) => {

  const {cart, addItem}= useContext(CartContext)

  return (
    <div className='productCard2'>
      <div>
        <img className='productCard_img' src={props.product.urlImagem} alt='' />
        <h2 className='productCard_nome'><strong>{props.product.nome}</strong></h2>
        <div className='teste'>
          <h5 className='productCard_descricao'>{props.product.descricao}</h5>
          <div className='productCard_preco'>
            <h3>{props.product.valorUnitario}</h3>
          </div>
        </div>
        <button onClick={addItem} className='productCard_button'> 
          Adicionar ao carrinho
        </button>
      </div >
    </div >
  )
};

export default ProductCard;