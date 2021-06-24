import './styles.css'
import api from '../../services/api'
import Navbar from '../../components/NavbarNight';
import Sidebar from "../../components/SidebarNightAdmin";
import React, { useEffect, useState } from "react";


function Category() {

    const [categorias, setCategorias] = useState([])
    const [id, setId] = useState([])
    const [nome, setNome] = useState([])
    const [descricao, setDescricao] = useState([])

    useEffect(() => {
        pegarCategoria()
    }, [])

    async function pegarCategoria() {
        const response = await api.get('/categorias')
        const result = response.data;
        setCategorias(result)
    }

    async function deletarCategoria(id) {
        await api.delete(`/categorias/${id}`)
        var categoriasFiltradas = categorias.filter(x => x.id !== id)
        setCategorias(categoriasFiltradas)
    }


    async function atualizaCategoria(id)
  {
      await api.put(`/categorias/${id}`,
      {
          nome:`${document.getElementById("nomeId").value}`,
          descricao:`${document.getElementById("descricaoId").value}`
      })  
      pegarCategoria();
  }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='containerCategorias'>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <hr className="linhaSuperior" />
            <h1 className="titulo">Categorias</h1>
            <hr className="linhaInferior" />
                <div className='atualizar'>
                    <input type='text' className="inputAtualizar" onChange={(e)=>{setId(e.target.value)}} placeholder="ID" />
                    <input type='text' className="inputAtualizar" id="nomeId" onChange={(e)=>{setNome(e.target.value)}}placeholder="Nome"></input>
                    <input type='text' className="inputAtualizar" id="descricaoId" onChange={(e)=>{setDescricao(e.target.value)}}placeholder="Descricao"></input>
                    <button className="botaoAtualizar" onClick={() => atualizaCategoria(id)} >Atualizar</button>  
                </div>
            <div className='centralizar'>
                <table className='tabela' border='1'>
                    <tr className="fundo2">
                        <td className='linhaTitulo'>ID</td>
                        <td className='linhaTitulo'>Nome</td>
                        <td className='linhaTitulo'>Descrição</td>
                    </tr>
                    {
                        categorias.map((item) =>
                            <tr className="fundo">
                                <td className='linhaCategoria'>{item.id}</td>
                                <td className='linhaCategoria'>{item.nome}</td>
                                <td className='linhaCategoria'>{item.descricao}</td>
                                <td className='linhaCategoria'><button className="botaoCategoria" onClick={() => deletarCategoria(item.id)}>Deletar</button></td>
            
                            </tr>
                        )
                    }
                </table>
                
            </div>

        </div>

    );
}

export default Category;