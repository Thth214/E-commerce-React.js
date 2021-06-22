import './styles.css'
import { Link } from 'react-router-dom'
import Menu from '../../components/MenuPrincipal/menu'
import { useSelector } from 'react-redux'
import React, {useState} from 'react'



function Carrinho(props) {
    
    console.log("teste", props)

    const [carrinho, setCarrinho] = useState([]);
    return (

        <div className='containerCarrinho'>
            <Menu />
            <div>
                {carrinho.length === 0 ? <p>Sem Produtos</p>: <p>teste</p>}
            </div>
            <div>

            </div>
        </div>
    )
}

export default Carrinho;