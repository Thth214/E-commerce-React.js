
import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import products from "../data";
import Axios from "axios";

const ProductCardAdmin = ({product}) => {

    // const url = '/produtos'
    // const [produtos, setProdutos] = useState("")

    // const novoProd = (event) => setProdutos(event.target.value);

    // console.log(props)

    // const handleDelete2 = async (event) => {
    //     event.preventDefault()
    //     props.delete(props.product.id)
    // }

    return (
        <div className='productCard'>
          <div>
            <img className='productCard_img' src={product.image_url} alt='' />
            <h2 className='productCard_nome'><strong>{product.nome}</strong></h2>
            <div className='teste'>
              <h5 className='productCard_descricao'>{product.descricao}</h5>
              <div className='productCard_preco'>
                <h3>{product.preco}</h3>
              </div>
            </div>
            <button
              className='productCard_button'
    
            >
              Adicionar ao carrinho
            </button>
          </div >
        </div >
      );
};

export default ProductCardAdmin;
