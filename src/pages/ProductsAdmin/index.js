import './styles.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/NavbarNight';
import Sidebar from "../../components/SidebarNightAdmin";
import React, { useState } from "react";
import ProductCard from "../../components/cardProdutoAdmin"
import products from "../../components/data"
import ReactPaginate from "react-paginate"


function ProductsAdmin() {

    const [produtos, setProdutos] = useState(products);
    const [pageNumber, setPageNumber] = useState(0);

      function handleDelete(id){
         const produtosFiltrados = produtos.filter(x => x.id !== id)
         setProdutos(produtosFiltrados)
     }

    const produtosPerPage = 18;
    const pagesVisited = pageNumber * produtosPerPage;

    const displayProducts = produtos
    .slice(pagesVisited, pagesVisited + produtosPerPage)
    .map((product) => {
        return (
            <ProductCard product={product} delete={handleDelete} />
        );
    });


    const pageCount = Math.ceil(produtos.length / produtosPerPage);

const changePage = ({ selected }) => {
    setPageNumber(selected);
};
const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

    return (
        <div>   
         <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />       
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

export default ProductsAdmin;