import './styles.css'
import { Link } from 'react-router-dom'
import Menu from '../../components/MenuPrincipal/menu'

function Home() {
  return (
    <div className='containerHome'>
      <div className='menuSuperior'>
        <Menu />
      </div>
      <div>
        <h1>Tela principal</h1>
      </div>
    </div>

  );
}

export default Home;
