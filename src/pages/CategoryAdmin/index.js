import './styles.css'
import { Link } from 'react-router-dom'
import Menu from '../../components/MenuCriacao/menu'

function Category() {
    return (
        <div className='containerCategorias'>
            <div className='menuSuperior'>
                <Menu />
            </div>

            <div>
                <h1>Categorias</h1>
            </div>
        </div>

    );
}

export default Category;