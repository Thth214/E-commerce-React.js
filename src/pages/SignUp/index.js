import React, { useState } from 'react'
import api from '../../services/api';
import './styles.css'
import {Link} from 'react-router-dom'

function Register() {

    const [pessoa, setPessoa] = useState({
        nomeUsuario: '',
        senha: ''
    })

    function handleNomeChange(event) {
        event.preventDefault();
        const novaPessoa = { ...pessoa }
        novaPessoa.nomeUsuario = event.target.value
        setPessoa(novaPessoa)
    }

    function handleSenhaChange(event) {
        event.preventDefault();
        const novaPessoa = { ...pessoa }
        novaPessoa.senha = event.target.value
        setPessoa(novaPessoa)

    }

    async function registra(event) {
        event.preventDefault();
        console.log(pessoa)
        await api.post('/clientes', pessoa
        )
    }

    return (

        <div className='containerLogin'>
            <h1 className="logo">Inscreva-se</h1>
            <form onSubmit={(event) => registra(event)}>
                <div className='input_Login'>
                    <input type='text' onChange={(event) => handleNomeChange(event)} className='inputLogin' placeholder='Usuário ou email'></input>
                    <input type='password' onChange={(event) => handleSenhaChange(event)} className='inputLogin' placeholder='Senha'></input>
                </div>
                <button type='submit' className='botaoLogin2'>Registrar</button>
                <Link to='/'>
                    <button className='botaoLogin2'>Fazer login</button>
                </Link>
            </form>
        </div>
    )
}

export default Register