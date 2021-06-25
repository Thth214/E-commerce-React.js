import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import React, { useState, useEffect } from 'react'
import api from '../../services/api';


function Login() {
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

   
    
    const history = useHistory();


    useEffect(() => {
        async function pegar() {
            const response = await api.get('/clientes')
            const resp = response.data;
            setUsuarios(resp)
        }
        pegar()
    }, [])


    function handleChange(event) {
        setUsuario(event.target.value)
    }
    function handleChange2(event) {
        setSenha(event.target.value)
    }


    const [state, setState] = useState(false)
       usuarios.map((item) => {
        if (item.nomeUsuario == usuario && item.senha == senha) {
            history.push('/home')
          }
          verificaAdmin()
     })


    function verificaAdmin() {
        if (usuario == 'admin' && senha == 'admin') {
            history.push('/productsAdmin')
        }
    }

    // map pessoas do banco { if map.pessoas == input.pessoa }

    return (
            <div className='containerLogin'>
                <h1 className="logo">Qualidade</h1>
                <div className='input_Login'>
                    <input type='text' className='inputLogin' onChange={handleChange} placeholder='Usuário ou email'></input>
                    <input type='password' className='inputLogin' onChange={handleChange2} placeholder='Senha'></input>
                </div>
                <button className='botaoLogin' onClick={verificaAdmin}>Login</button>
                <Link to='/register'>
                <button className='botaoLogin'>Registre-se aqui</button>
                </Link>

            </div>
    );
}

export default Login;
