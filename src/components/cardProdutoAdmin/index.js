import React from "react";
import "./styles.css";
const ProductCardAdmin = (props) => {
    return (
        <div className='productCard'>
            <div>
                <img className='productCard_img' src={props.product.urlImagem} alt='' />
                <h2 className='productCard_nome'><strong>{props.product.nome}</strong></h2>
                <div className='teste'>
                    <h5 className='productCard_descricao'>{props.product.descricao}</h5>
                    <div className='productCard_preco'>
                        <h3>{props.product.preco}</h3>
                    </div>
                </div>
                <div>
                    <button onClick={() => props.delete(props.product.id)} className='productCard_button' > Deletar produto</button>
                </div>
                <div>
                    <button className='productCard_button' > Atualizar produto</button>
                </div>
                </div>
        </div >
    );
};

export default ProductCardAdmin;
