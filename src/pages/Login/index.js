import {Link, Redirect, useHistory} from 'react-router-dom';
import './styles.css';
import React, {useState} from 'react'


function Login() {
    const [usuario, setUsuario] = useState([]);
    const history = useHistory();
    const [logado, setLogado]=useState(false);

    function handleChange(event){
        setUsuario(event.target.value)
    }

    function verificaAdmin(){
      
        console.log(usuario);
        if (usuario == 'admin'){
            // <Redirect to="/products" />;
            history.push('/creation')
        }else{
            history.push('/home')
        }

    }
   
    return (
    
      <div className='containerLogin'>
          <h1 className="logo">Logo</h1> 
          

          <div className='input_Login'>
              <input type='text' className='inputLogin' onChange={handleChange} placeholder='Usuário ou email'></input>
              <input type='password' className='inputLogin' placeholder='Senha'></input>
          </div>
          {/* <Link> */}
              <button className='botaoLogin' onClick={verificaAdmin}>Login</button>
          {/* </Link> */}
        
      </div>
    );
  }
  
  export default Login;
  