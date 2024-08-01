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
          quantity: 1,
          color: action.item.color
        }
      ]
    }
    case "remove": {
      return state.filter((it) => it.id != action.item.id);
    }
    case "subtract": {
      return state.map((item) => {
        if(item.id == action.item.id){
          return {...item, quantity: item.quantity - 1};
        }else{
          return item;
        }
      })
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
      <button className='info-company' style={{
        position: 'absolute',
        right: '20px',
        top: '20px',
        zIndex: '2',
        cursor: 'pointer',
        height: '40px'
      }} onClick={handleOpen}>Cart 🛒</button>
      <ShoppingCart handleOpen={handleOpen} shoppingCartisOpen={shoppingCartisOpen} state={state} dispatch={dispatch}></ShoppingCart>
      <Store dispatch={dispatch}></Store>
    </>

  )
}