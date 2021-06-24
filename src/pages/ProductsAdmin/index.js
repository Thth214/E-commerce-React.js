import './styles.css'
import Navbar from '../../components/NavbarNight';
import Sidebar from "../../components/SidebarNightAdmin";
import React, { useState, useEffect } from "react";
import ProductCard from "../../components/cardProdutoAdmin"
import ReactPaginate from "react-paginate"
import api from '../../services/api'
import {Link} from "react-router-dom";

function ProductsAdmin() {

    const [produtos, setProdutos] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const produtosPerPage = 18;
    const pagesVisited = pageNumber * produtosPerPage;

    

    useEffect(() => {
        async function pegar() {
            const response = await api.get('/produtos')
            const products = response.data;
            setProdutos(products)
        }
        pegar()
    }, [])

    async function deleteProduto(id){
        await api.delete(`/produtos/${id}`);
        const produtosFiltrados = produtos.filter(x => x.id !== id);
        setProdutos(produtosFiltrados);
    };

    const displayProducts = produtos
    .slice(pagesVisited, pagesVisited + produtosPerPage)
    .map((product) => {
        return (
            <ProductCard key={product.id} product={product} delete={deleteProduto}/>
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
            <hr className="linhaSuperior"/>      
            <h1 className="titulo">Produtos</h1>
            <hr className="linhaInferior"/>
            <Link className="LinkContainer" to="/productsUpdate">
            <button className="botaoAtualizar2">Atualizar Produtos</button>
            </Link>
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