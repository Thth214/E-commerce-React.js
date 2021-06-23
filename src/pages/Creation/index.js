import './styles.css'
import { Link } from 'react-router-dom'
import Menu from '../../components/MenuCriacao/menu'
import ProductForm from './postForm';

function Criacao() {

    return (
        <div>
            <div className='menuSuperior'>
                <Menu />
            </div>
            <h1 >Tela Criação</h1>
            <hr className= 'linha'/>
            <div >
                <ProductForm />
            </div>
        </div>


    );
}

export default Criacao;