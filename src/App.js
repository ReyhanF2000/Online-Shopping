import './App.css'
import React, { useReducer } from 'react'
import { reducer } from './Reducer/reducer'
import { myContext } from './Context/context'
import Navbar from './Components/Navbar'
import Introduction from './Components/Introduction'
import Products from './Components/Products'
import Sidebar from './Components/Sidebar'

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    show: false,
    items: [],
  })

  return (
    <myContext.Provider
      value={{ state, dispatch }}
    >
      <Navbar />
      <Sidebar />
      <Introduction />
      <Products />
    </myContext.Provider>);
}

