import React from 'react'
import './cardPedido.css'

function cardPedido() {
    return (
        <div className='containerPedido'>
            <div className='CardEsquerda'>
                <p className='card1'>Id Pedido</p>
                <p className='card1'>Status</p>
                <p className='card1'>Preço total</p>
            </div>
            <div className='cardDireita'>
                <ul className='linhas'>
                    <li className='card2'>Produto</li>
                    <li className='card2'>Quantidade</li>
                    <li className='card2'>Preço unitário</li>
                </ul>
               
            </div>
            
        </div>
    )
}

export default cardPedido;