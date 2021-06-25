import './style.css'
import api from '../../services/api'
import Navbar from '../../components/NavbarNight';
import Sidebar from "../../components/SidebarNightAdmin";
import React, { useEffect, useState } from "react";


function ProductUpdate() {

    const [produtos, setProdutos] = useState([])
    const [id, setId] = useState([])
    const [nome, setNome] = useState([])
    const [descricao, setDescricao] = useState([])
    const [url,SetUrl] = useState([])
    const [estoque,SetEstoque] = useState([])
    const [valor,SetValor] = useState([])
    

    useEffect(() => {
        pegarProduto()
    }, [])

    async function pegarProduto() {
        const response = await api.get('/produtos')
        const result = response.data;
        setProdutos(result)
    }

    async function updateProduto(id){
        await api.put(`/produtos/${id}`,{
        nome:`${document.getElementById("nomeId").value}`,
        descricao:`${document.getElementById("descricaoId").value}`,
        valorUnitario:`${document.getElementById("valorId").value}`,
        qtd_estoque:`${document.getElementById("estoqueId").value}`,
        urlImagem:`${document.getElementById("URLId").value}`
        });
        pegarProduto();
        alert("Produto Atualizado")
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='containerProdutos'>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <hr className="linhaSuperior" />
            <h1 className="titulo">Produtos</h1>
            <hr className="linhaInferior" />
            <div className='atualizar'>
                    <input type='text' className="inputAtualizar" onChange={(e)=>{setId(e.target.value)}}placeholder="ID" />
                    <input type='text' id="nomeId" className="inputAtualizar"  onChange={(e)=>{setNome(e.target.value)}} placeholder="Nome"></input>
                    <input type='text' id="descricaoId" className="inputAtualizar" onChange={(e)=>{setDescricao(e.target.value)}}placeholder="Descricao"></input>
                    <input type='text' id="valorId" className="inputAtualizar" onChange={(e)=>{SetValor(e.target.value)}}placeholder="Valor"></input>
                    <input type='text' id="estoqueId" className="inputAtualizar" onChange={(e)=>{SetEstoque(e.target.value)}}placeholder="Estoque"></input>
                    <input type='text' id="URLId" className="inputAtualizar" onChange={(e)=>{SetUrl(e.target.value)}}placeholder="URL"></input>
                    <button className="botaoAtualizar" onClick={() => updateProduto(id)} >Atualizar</button>  
                </div>
            <div className='centralizar'>
                <table className='tabela' border='1'>
                    <tr className="fundo2">
                        <td className='linhaTitulo'>ID</td>
                        <td className='linhaTitulo'>Nome</td>
                        <td className='linhaTitulo'>Descrição</td>
                        <td className='linhaTitulo'>Preço</td>
                        <td className='linhaTitulo'>Estoque</td>    
                    </tr>
                    {
                        produtos.map((item) =>
                            <tr className="fundo">
                                <td className='linhaProduto'>{item.id}</td>
                                <td className='linhaProduto'>{item.nome}</td>
                                <td className='linhaProduto'>{item.descricao}</td>
                                <td className='linhaProduto'>{item.valorUnitario}</td>
                                <td className='linhaProduto'>{item.qtd_estoque}</td>         
                            </tr>
                        )
                    }
                </table>
            </div>

        </div>

    );
}

export default ProductUpdate;