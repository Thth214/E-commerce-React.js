import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import './postForm.css'


function ProductForm() {

   

    const [product, setProduct] = useState({
        nome: '',
        descricao: '',
        qtd_estoque: '',
        valorUnitario:'',
        urlImagem:'',
        categoria:{
            id:''
        }
    })

    const [category, setCategory] = useState({
        nome: '',
        descricao: ''
    })

    const[categoria, setCategoria]= useState([])

    function handleIdChange(event) {
        event.preventDefault();
        const novoProd = { ...product }
        novoProd.categoria.id = event.target.value
        setProduct(novoProd)
    }

    function handleNomeChange(event) {
        event.preventDefault();
        const novoProd = { ...product }
        novoProd.nome = event.target.value
        setProduct(novoProd)
    }

    function handleDescricaoChange(event) {
        event.preventDefault();
        const novoProd = { ...product }
        novoProd.descricao = event.target.value
        setProduct(novoProd)
    
    }

    function handleEstoqueChange(event) {
        event.preventDefault();
        const novoProd = { ...product }
        novoProd.qtd_estoque = event.target.value
        setProduct(novoProd)
        
    }

    function handlePrecoChange(event) {
        event.preventDefault();
        const novoProd = { ...product }
        novoProd.valorUnitario = event.target.value
        setProduct(novoProd)
        
    }
    function handleURLChange(event) {
        event.preventDefault();
        const novoProd = { ...product }
        novoProd.urlImagem = event.target.value
        setProduct(novoProd)
        
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(product)
        await api.post('produtos', product, {
        })  
    }

    function handleChange2(event) {
        const novaCat = { ...category }
        novaCat[event.target.id] = event.target.value
        setCategory(novaCat)
        console.log(novaCat)
    }

    async function handleSubmit2(event) {
        event.preventDefault();
        await api.post(`categorias`, category)
    }

   function alert1(){
       alert("Categoria Criada Com Sucesso");
   }
   function alert2(){
    alert("Produto Criado Com Sucesso");
}

   
    return (
        <div className='containerForm'>
            <div className='divProduto' >
                <form className='formProduto' onSubmit={(event) => handleSubmit(event)}>
                    <h3 className='titulos'>Nome:</h3>
                    <input onChange={(event) => handleNomeChange(event)} id='nome'  type='text' placeholder='Nome'></input>
                    <h3 className='titulos'>Descrição:</h3>
                    <input onChange={(event) => handleDescricaoChange(event)} id='descricao'  type='text' placeholder='Descrição'></input>
                    <h3 className='titulos'>Preço:</h3>
                    <input onChange={(event) => handlePrecoChange(event)} id='valorUnitario'  type='text' placeholder='Preço'></input>
                    <h3 className='titulos'>Estoque:</h3>
                    <input onChange={(event) => handleEstoqueChange(event)} id='qtd_estoque'  type='text' placeholder='Quantidade estoque'></input>
                    <h3 className='titulos'>Categoria:</h3>
                    <input onChange={(event) => handleIdChange(event)} id='categoria'   type='text' placeholder='Categoria'></input>
                    <h3 className='titulos'>Imagem:</h3>
                    <input onChange={(event) => handleURLChange(event)} id='urlImagem'   type='text' placeholder='URl'></input>
                    <button className='criarProduto'onClick={alert2} type='submit'>Criar produto</button>
                </form>
            </div>
            <div className='divCategoria'>
                <form className='formCategoria' onSubmit={(event) => handleSubmit2(event)}>
                    <h3 className='titulos'>Nome:</h3>
                    <input onChange={(event) => handleChange2(event)} id='nome' value={category.nome} type='text' placeholder='nome'></input>
                    <h3 className='titulos'>Descrição:</h3>
                    <input onChange={(event) => handleChange2(event)} id='descricao' value={category.descricao} type='text' placeholder='descricao'></input>
                    <button className='criarCategoria'onClick={alert1} type='submit'>Criar categoria</button>
                </form>
            </div>

        </div >
    )
}

export default ProductForm