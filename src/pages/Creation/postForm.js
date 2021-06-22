import React, { useState } from 'react'
import Axios from 'axios'

function ProductForm() {

    const url = 'https://trabalho-ecommerce.herokuapp.com/produtos'
    const url2 = 'https://trabalho-ecommerce.herokuapp.com/categorias'
    const [product, setProduct] = useState({
        nome: '',
        descricao: '',
        preco: '',
        foto: ''
    })

    const [category, setCategory] = useState({
        nome: '',
        descricao: ''
    })

    function handleChange(event) {
        const novoProd = { ...product }
        novoProd[event.target.id] = event.target.value
        setProduct(novoProd)
        console.log(novoProd)
    }

    function handleSubmit(event) {
        Axios.post(url, {
            nome: product.nome,
            descricao: product.descricao,
            preco: product.preco,
            foto: product.foto
        })
            .then(rv => {
                console.log(rv.product)
            })
    }

    function handleChange2(event) {
        const novaCat = { ...category }
        novaCat[event.target.id] = event.target.value
        setCategory(novaCat)
        console.log(novaCat)
    }

    function handleSubmit2(event) {
        Axios.post(url2, {
            nome: category.nome,
            descricao: category.descricao,

        })
            .then(rv => {
                console.log(rv.category)
            })
    }

    return (
        <div className='containerForm'>
            <div className='formProduto'>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <input onChange={(event) => handleChange(event)} id='nome' value={product.nome} type='text' placeholder='nome'></input>
                    <input onChange={(event) => handleChange(event)} id='descricao' value={product.descricao} type='text' placeholder='descricao'></input>
                    <input onChange={(event) => handleChange(event)} id='preco' value={product.preco} type='text' placeholder='preco'></input>
                    <input onChange={(event) => handleChange(event)} id='foto' value={product.foto} type='text' placeholder='foto'></input>
                    <button>Criar produto</button>
                </form>
            </div>
            <div className='formCategoria'>
                <form onSubmit={(event) => handleSubmit2(event)}>
                    <input onChange={(event) => handleChange2(event)} id='nome' value={category.nome} type='text' placeholder='nome'></input>
                    <input onChange={(event) => handleChange2(event)} id='descricao' value={category.descricao} type='text' placeholder='descricao'></input>
                    <button>Criar categoria</button>
                </form>
            </div>

        </div>
    )
}

export default ProductForm