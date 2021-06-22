import './styles.css'
import { Link } from 'react-router-dom'
import Menu from '../../components/MenuCriacao/menu'

function Products() {
    return (
        <div className='containerProducts'>
            <div className='menuSuperior'>
                <Menu />
            </div>

            <div>
                <h1>Produtos</h1>
            </div>
        </div>

    );
}

export default Products;