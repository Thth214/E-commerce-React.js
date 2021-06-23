import './styles.css'
import { Link } from 'react-router-dom'
import Menu from '../../components/MenuCriacao/menu'
import ProductForm from './postForm';
import Navbar from '../../components/NavbarNight';
import Sidebar from "../../components/SidebarNightAdmin";
import React,{useState} from "react";

function Criacao() {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

    return (
        <div>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <hr className='linhaSuperior' />
            <h2 className="telaCriacao" >Tela Criação</h2>
            <hr className= 'linhaInferior'/>
            <div >
                <ProductForm />
            </div>
        </div>


    );
}

export default Criacao;