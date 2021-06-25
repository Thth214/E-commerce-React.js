import Home from './pages/Home/index'
import Login from './pages/Login/index'
import Category from './pages/Category/index'
import MyOrders from './pages/MyOrders/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Products from './pages/Products/index'
import Creation from './pages/Creation/index'
import ProductsAdmin from './pages/ProductsAdmin/index'
import CategoryAdmin from './pages/CategoryAdmin/index'
import Carrinho from './pages/Carrinho/index'
import { GlobalStyle } from './styles/GlobalStyles'
import ProductUpdate from './pages/ProductUpdate'
import { CartProvider } from './contexts/CartContext/index'
import Register from './pages/SignUp/index'

function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
        <Route path='/category' exact component={Category} />
        <Route path='/creation' exact component={Creation} />
        <Route path='/productsAdmin' exact component={ProductsAdmin} />
        <Route path='/categoryAdmin' exact component={CategoryAdmin} />
        <Route path='/productsUpdate' exact component={ProductUpdate} />
        <Route path='/register' exact component={Register} />
        <CartProvider>
          <Route path='/products' exact component={Products} />
          <Route path='/carrinho' exact component={Carrinho} />
          <Route path='/MyOrders' exact component={MyOrders} />
        </CartProvider>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
