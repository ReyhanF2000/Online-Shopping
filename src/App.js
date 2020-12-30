import './App.css';
import Navbar from './Components/Navbar';
import Introduction from './Components/Introduction';
import Products from './Components/Products';
import Sidebar from './Components/Sidebar';
import { useReducer } from 'react';
import { reducer } from './Reducer/reducer'
import { ShowSidebar, TotalShop, Increase, Decrease, Delete, Reset } from './Action/actions';
import { data } from './Data/data'

function App() {
  const [state, dispatch] = useReducer(reducer, {
    show: false,
    items: []
  })

  function handleShowSidebar() {
    dispatch(ShowSidebar(!state.show))
  }
  function handleCloseSidebar() {
    dispatch(ShowSidebar(!state.show))
  }

  function handleTotalShop(id) {
    dispatch(TotalShop(id))
  }

  function handleIncrease(id) {
    dispatch(Increase(id))
  }

  function handleDecrease(id) {
    dispatch(Decrease(id))
  }

  function handleDelete(id) {
    dispatch(Delete(id))
  }

  function handleReset() {
    dispatch(Reset())
  }

  function calculateValue() {
    let counts = 0
    state.items.forEach(item => {
      counts += item.number
    })
    return counts
  }

  function calculateTotalPrice() {
    let counts = 0
    state.items.forEach(item => {
      counts += item.number * Number(item.price)
    })
    return counts.toFixed(2)
  }

  return (<>
    <Navbar
      onClickShow={handleShowSidebar}
      value={calculateValue()}
    />
    <Sidebar
      onClickClose={handleCloseSidebar}
      data={state.items}
      onINCREASE={handleIncrease}
      onDECREASE={handleDecrease}
      onDELETE={handleDelete}
      onRESET={handleReset}
      totalPrice={calculateTotalPrice()}
      open={state.show}
    />
    <Introduction />
    <Products
      data={data}
      onTotalShop={handleTotalShop}
    />
  </>);
}

export default App;
