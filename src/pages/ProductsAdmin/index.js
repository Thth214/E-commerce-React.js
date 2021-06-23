import React, { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Menu from '../../components/MenuCriacao/menu'
import Card from '../../components/cardProduto'
import products from "../../components/data";
import ReactPaginate from "react-paginate";


function Products() {
    const [produtos, setProdutos] = useState(products);
    const [pageNumber, setPageNumber] = useState(0);

    const produtosPerPage = 18;
    const pagesVisited = pageNumber * produtosPerPage;

    // function handleDelete(id){
    //     const produtosFiltrados = produtos.filter(x => x.id !== id)
    //     setProdutos(produtosFiltrados)
    // }

    const displayProducts = produtos
        .slice(pagesVisited, pagesVisited + produtosPerPage)
        .map((product) => {
            return (
                <div>
                    <Card product={product}  />
                </div>
            );
        });



    const pageCount = Math.ceil(produtos.length / produtosPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <Menu />
            <h1>Produtos</h1>
            <hr className="linha"/>
            <div className='produtoLista'>
            {displayProducts}
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
};

export default Products;