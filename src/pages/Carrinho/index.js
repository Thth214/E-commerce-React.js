import './styles.css'
import Navbar from '../../components/NavbarNight';
import Sidebar from '../../components/SidebarNight';
import React,{useContext, useState} from "react";
import {CartContext} from "../../contexts/CartContext/"



function Carrinho() {
    const {cart ,clearCart,removeItem} = useContext(CartContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <hr className="linhaSuperior" />
            <h1 className="titulo">Carrinho</h1>
            <hr className="linhaInferior" />
            <div className="deletar">
            <button onClick={()=>clearCart()} className="botaoDelete">Limpar Carrinho</button>
           </div>
           
           <div className="deletar">
            <table border="1">
                {  cart.map((item) =>
                    <tr  className="fundoCarrinho">
                                <img className="imgCarrinho" src={item.urlImagem}/>
                                <td className='linhaCategoria'>{item.nome}</td>
                                <td className='linhaCategoria'>{item.valorUnitario}R$</td>
                                <td className='linhaCategoria'><button className="botaoRemover" onClick={() => removeItem(item.id)}>Remover</button></td>
                            </tr>
                )
                }
            </table>
           </div>
        </div>


    );
   
    
}

export default Carrinho;