import './styles.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/NavbarNight';
import Sidebar from "../../components/SidebarNightAdmin";
import React,{useState} from "react";

function Products() {

const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div>
        <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
        <div className='containerProducts'>
            <div className='menuSuperior'>
            </div>

            <div>
                <h1>Produtos</h1>
            </div>
        </div>
        </div>

    );
}

export default Products;