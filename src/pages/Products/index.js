import React, {useState} from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Card from '../../components/cardProduto'
import products from "../../components/data";
import ProductCard from "../../components/cardProduto";
import ReactPaginate from "react-paginate";
import Navbar from '../../components/NavbarNight';
import Sidebar from '../../components/SidebarNight';


function Products() {
    const [produtos, setProdutos] = useState(products.slice(0, 1000));
    const [pageNumber, setPageNumber] = useState(0);

    const produtosPerPage = 18;
    const pagesVisited = pageNumber * produtosPerPage;

    const displayProducts = produtos
    .slice(pagesVisited, pagesVisited + produtosPerPage)
    .map((product) => {
        return (
            <ProductCard product={product} />
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

export default Products;