import './styles.css'
import { Link } from 'react-router-dom'
import Menu from '../../components/MenuPrincipal/menu'
import ReactPaginate from "react-paginate";
import React, { useState } from 'react'
import Json from './data.json'


function MyOrders() {
    const [users, setUsers] = useState(Json.slice(0, 1000));
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
            return (
                <div className="containerPedido">
                    <div className="user">
                        <h3 className="cardEsquerda"><strong>Id pedido:</strong>{user.id}</h3>
                        <h3 className="cardEsquerda"><strong>Status pedido:</strong>{user.status}</h3>
                        <h3 className="cardEsquerda"><strong>Valor total:</strong>{user.valorTotal}</h3>
                    </div>
                    <div className='pedido'>
                        <h3 className="cardDireita"><strong>Produto:</strong>{user.status}</h3>
                        <h3 className="cardDireita"><strong>Quantidade:</strong>{user.id}</h3>
                        <h3 className="cardDireita"><strong>Valor unitario:</strong>{user.valorTotal}</h3>
                    </div>


                </div>
            );
        });

    function Adiciona() {
        setUsers([ displayUsers, ...users]);
    }


    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <Menu />
            <div className="App">

                <h1>Meus pedidos:</h1>
                <button onClick={Adiciona}>Criar novo pedido</button>
                {displayUsers}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </div>
    );
}



export default MyOrders;


/*
return (
                <div className='containerMyOrders'>
                    <div className='menuSuperior'>
                        <Menu />
                    </div>
                    <div>
                        <div className='divBotao'>
                            <Link to='/products'>
                                <button  className='botaoNovoPedido'>Criar novo pedido</button>
                            </Link>
                        </div>
                        <div className='containerCard'>
                            <CardPedido />
                            <CardPedido />
                            <CardPedido />
                            <CardPedido />
                            <CardPedido />
                            <CardPedido />

                        </div>
                    </div>
                </div>

            );
*/