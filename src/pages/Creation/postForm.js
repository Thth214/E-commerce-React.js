import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './postForm.css'

function ProductForm() {

    const url = '/produtos'
    const url2 = '/categorias'

    const [product, setProduct] = useState({
        nome: '',
        descricao: '',
        qtd_estoque: '',
        valorUnitario:'',
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

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(product)
        await Axios.post(url, product, {
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                console.log(response.product)
            })
            
    }

    function handleChange2(event) {
        const novaCat = { ...category }
        novaCat[event.target.id] = event.target.value
        setCategory(novaCat)
        console.log(novaCat)
    }

    function handleSubmit2(event) {
        event.preventDefault();
        Axios.post(url2, category)
            .then(response => {
                console.log(response.category)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // useEffect(() => {
    //     fetch(url2,
    //         {
    //             method: "GET",
    //             headers: {
    //                 'Content-type': 'application/json'
    //             }
    //         }).then(response => response.json()).then(response => setCategoria(response))
    // })

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
                    {/* <select id='categorias'>
                        {
                            categoria.map(result=>{
                                return(
                        <option key={result.key} value={result.key}>{result.nome}</option>
                            )})}
                    </select> */}
                    
                    <button className='criarProduto' type='submit'>Criar produto</button>
                </form>
            </div>
            <div className='divCategoria'>
                <form className='formCategoria' onSubmit={(event) => handleSubmit2(event)}>
                    <h3 className='titulos'>Nome:</h3>
                    <input onChange={(event) => handleChange2(event)} id='nome' value={category.nome} type='text' placeholder='nome'></input>
                    <h3 className='titulos'>Descrição:</h3>
                    <input onChange={(event) => handleChange2(event)} id='descricao' value={category.descricao} type='text' placeholder='descricao'></input>
                    <button className='criarCategoria' type='submit'>Criar categoria</button>
                </form>
            </div>

        </div >
    )
}

export default ProductForm