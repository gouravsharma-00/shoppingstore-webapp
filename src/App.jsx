import ShoppingCart from './component/shoppingCart';
import Store from './component/store';
import { useState, useReducer } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case "add": {
      let a = state.find((item) => item.id == action.item.id)
      if(a != null){
        return state.map((item) => {
          if(item.id == action.item.id){
            return {...item, quantity: item.quantity+1}
          }else{
            return item
          }
        })
      }
      return [
        ...state, {
          id: action.item.id,
          title: action.item.title,
          price: action.item.price,
          quantity: 0
        }
      ]
    }
    case "remove": {
      return state.filter((it) => it.id != action.item.id);
    }
  }
}

export default function App() {
  const [shoppingCartisOpen, setShoppingCartisOpen] = useState(false);
  const handleOpen = () => {
    setShoppingCartisOpen((bool) => !bool);
  }
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <>
      <button style={{
        position: 'absolute',
        right: '20px',
        top: '20px',
        zIndex: '2'
      }} onClick={handleOpen}>Open</button>
      <ShoppingCart handleOpen={handleOpen} shoppingCartisOpen={shoppingCartisOpen} state={state} dispatch={dispatch}></ShoppingCart>
      <Store dispatch={dispatch}></Store>
    </>

  )
}