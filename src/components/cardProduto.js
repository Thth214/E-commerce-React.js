
import { useContext } from "react";
import "./cardProduto.css";
import formatCurrency from "format-currency";
import products from "./data";
//import CartContext from "../context/cart/CartContext";

const ProductCard = ({ product }) => {
  //const { addToCart } = useContext(CartContext);

  function addCarrinho(product) {
    console.log(product)
  }

  let formato = { format: "%s%v", symbol: "R$" };
  return (
    <div className='productCard'>
      <div>
        <img className='productCard_img' src={product.image_url} alt='' />
        <h2 className='productCard_nome'><strong>{product.nome}</strong></h2>
        <div className='teste'>
        <h5 className='productCard_descricao'>{product.descricao}</h5>
        <div className='productCard_preco'>
          <h3>{formatCurrency(`${product.preco}`, formato)}</h3>
        </div>
        </div>
        <button
          className='productCard_button'
          onClick={() => addCarrinho(product)}
        >
          Adicionar ao carrinho
        </button>
      </div >
    </div >
  );
};

export default ProductCard;
