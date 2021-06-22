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
            <div>Tela Criação</div>
            <div>
                <ProductForm />
            </div>
        </div>


    );
}

export default Criacao;