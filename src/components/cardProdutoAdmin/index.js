
import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import products from "../data";
import { func } from "prop-types";
import Axios from "axios";

const ProductCardAdmin = (props) => {

    const url = '/produtos'
    const [produtos, setProdutos] = useState("")

    const novoProd = (event) => setProdutos(event.target.value);

    console.log(props)

    const handleDelete2 = async (event) => {
        event.preventDefault()
        props.delete(props.product.id)
    }
    return (
        <div className='productCard'>
            <div>
                <img className='productCard_img' src={props.product.image_url} alt='' />
                <h2 className='productCard_nome'><strong>{props.product.nome}</strong></h2>
                <div className='teste'>
                    <h5 className='productCard_descricao'>{props.product.descricao}</h5>
                    <div className='productCard_preco'>
                        <h3>{props.product.preco}</h3>
                    </div>
                </div>
                <div>
                    <button onClick={handleDelete2}> Deletar produto</button>
                </div>
                </div>
        </div >
    );
};

export default ProductCardAdmin;
