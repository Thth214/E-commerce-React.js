import Home from'./pages/Home/index'
import Login from './pages/Login/index'
import Category from './pages/Category/index'
import MyOrders from './pages/MyOrders/index'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Products from './pages/Products/index'
import Creation from './pages/Creation/index'
import ProductsAdmin from './pages/ProductsAdmin/index'
import CategoryAdmin from './pages/CategoryAdmin/index'
import Carrinho from './pages/Carrinho/index'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/' exact component={Login}/>
      <Route path='/home' exact component={Home} />
      <Route path='/products' exact component={Products} />
      <Route path='/category' exact component={Category} />
      <Route path='/MyOrders' exact component={MyOrders} />
      <Route path='/creation' exact component={Creation} />
      <Route path='/productsAdmin' exact component={ProductsAdmin} />
      <Route path='/categoryAdmin' exact component={CategoryAdmin} />
      <Route path='/carrinho' exact component={Carrinho} />
      
      </Switch>
    </BrowserRouter>
  );
}

export default App;
