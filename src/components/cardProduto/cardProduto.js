
import React from "react";
import "./cardProduto.css";


const ProductCard = (props) => {


  return (
    <div className='productCard'>
      <div>
        <img className='productCard_img' src={props.product.urlImagem} alt='' />
        <h2 className='productCard_nome'><strong>{props.product.nome}</strong></h2>
        <div className='teste'>
          <h5 className='productCard_descricao'>{props.product.descricao}</h5>
          <div className='productCard_preco'>
            <h3>{props.product.valorUnitario}</h3>
          </div>
        </div>
        <button
          className='productCard_button'
        >
          Adicionar ao carrinho
        </button>
      </div >
    </div >
  )
};

export default ProductCard;