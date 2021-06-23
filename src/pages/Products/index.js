import React, { useState, useEffect } from 'react'
import './styles.css'
import ProductCard from "../../components/cardProduto/cardProduto";
import ReactPaginate from "react-paginate";
import Navbar from '../../components/NavbarNight';
import Sidebar from '../../components/SidebarNight';
import api from '../../services/api'


function Products() {
    const [produtos, setProdutos] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const produtosPerPage = 18;
    const pagesVisited = pageNumber * produtosPerPage;

    const displayProducts = produtos
        .slice(pagesVisited, pagesVisited + produtosPerPage)
        .map((product) => {
            return (
                <ProductCard key={product.id} product={product} />
            );
        });

       

    useEffect(() => {
        async function pegar() {
            const response = await api.get('/produtos')
            const products = response.data;
            setProdutos(products)
        }
        pegar()
    }, [])


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
            <hr className="linha" />
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