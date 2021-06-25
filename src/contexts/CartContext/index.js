import {createContext, useState} from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addItem(produto) {
    const {nome,valorUnitario,urlImagem,id} = produto
    setCart([...cart, {nome,valorUnitario,urlImagem,id}])
  }
  function removeItem(id) {
    const filteredCart = cart.filter(item => item.id !== id);
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}