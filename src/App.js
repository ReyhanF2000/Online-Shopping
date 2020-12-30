import './App.css';
import Navbar from './Components/Navbar';
import Introduction from './Components/Introduction';
import Products from './Components/Products';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';

const data = [
  { number: 0, id: 1, title: "Queen Panel Bed", price: '80.99', src: "../Img/product-1.jpeg" },
  { number: 0, id: 2, title: "King Panel Bed", price: '95.99', src: "../Img/product-2.jpeg" },
  { number: 0, id: 3, title: "Single Panel Bed", price: '40.99', src: "../Img/product-3.jpeg" },
  { number: 0, id: 4, title: "Twin Panel Bed", price: '75.99', src: "../Img/product-4.jpeg" },
  { number: 0, id: 5, title: "Fridge", price: '88.99', src: "../Img/product-5.jpeg" },
  { number: 0, id: 6, title: "Dresser", price: '32.99', src: "../Img/product-6.jpeg" },
  { number: 0, id: 7, title: "Couch", price: '45.99', src: "../Img/product-7.jpeg" },
  { number: 0, id: 8, title: "Table", price: '33.99', src: "../Img/product-8.jpeg" }
]
function App() {
  const [show, setShow] = useState(false)
  const [items, setItems] = useState([])

  function handleShowSidebar() {
    setShow(true)
  }
  function handleCloseSidebar() {
    setShow(false)
  }

  function IncreseNumberItem(id, copyState) {
    const index = copyState.findIndex(item => item.id === id)
    const item = { ...copyState[index] }
    item.number = item.number + 1
    copyState[index] = item
    return copyState
  }

  function UnshiftItem(id, copyState, CopyData) {
    const index = CopyData.findIndex(item => item.id === id)
    const item = { ...CopyData[index] }
    item.number = item.number + 1
    copyState.unshift(item)
    return copyState
  }

  function handleTotalShop(id) {
    const CopyData = [...data]
    const copyState = [...items]
    const findSItem = copyState.find(item => item.id === id)
    setItems(findSItem ? IncreseNumberItem(id, copyState) : UnshiftItem(id, copyState, CopyData))
  }

  function handleIncrease(id) {
    const copyState = [...items]
    const index = copyState.findIndex(item => item.id === id)
    const item = { ...copyState[index] }
    item.number = item.number + 1
    copyState[index] = item
    setItems(copyState)
  }

  function handleDecrease(id) {
    const copyState = [...items]
    const index = copyState.findIndex(item => item.id === id)
    const item = { ...copyState[index] }
    item.number = item.number -1
    copyState[index] = item
    if (copyState[index].number === 0) {
      copyState.splice(index, 1)
    }
    setItems(copyState)
  }

  function handleDelete(id) {
    const copyState = [...items]
    const index = copyState.findIndex(item => item.id === id)
    copyState.splice(index, 1)
    setItems(copyState)
  }
  
  function handleRESET() {
    setItems([])
  }

  function calculateValue() {
    let counts = 0
    items.forEach(item => {
      counts += item.number
    })
    return counts
  }

  function calculateTotalPrice() {
    let counts = 0
    items.forEach(item => {
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
      data={items}
      onINCREASE={handleIncrease}
      onDECREASE={handleDecrease}
      onDELETE={handleDelete}
      onRESET={handleRESET}
      totalPrice={calculateTotalPrice()}
      open={show}
    />
    <Introduction />
    <Products
      data={data}
      onTotalShop={handleTotalShop}
    />
  </>);
}

export default App;
