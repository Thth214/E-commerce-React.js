import React, { useState, useEffect, useContext } from 'react'
import './styles.css'
import ProductCard from "../../components/cardProduto/cardProduto";
import ReactPaginate from "react-paginate";
import Navbar from '../../components/NavbarNight';
import Sidebar from '../../components/SidebarNight';
import api from '../../services/api'
import {CartContext} from '../../contexts/CartContext/index'

function Products() {
    const [produtos, setProdutos] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    //const {cart, addItem}= useContext(CartContext)

    const produtosPerPage = 18;
    const pagesVisited = pageNumber * produtosPerPage;

    const displayProducts = produtos
        .slice(pagesVisited, pagesVisited + produtosPerPage)
        .map((product) => {
            return (
                <ProductCard key={product.id} product={product}/>
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
        <div >
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <hr className="linhaSuperior2" />
            <h1 className="titulo2">Produtos</h1>
            <hr className="linhaInferior2" />
            <div className='produtoLista2'>
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