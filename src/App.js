import React, { useReducer } from 'react'
import { reducer } from './Reducer/reducer'
import { DispatchContext } from './Context/DispatchContext'
import Navbar from './Components/Navbar'
import Introduction from './Components/Introduction'
import Products from './Components/Products'
import Sidebar from './Components/Sidebar'
import './App.css'

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    show: false,
    items: [],
  })

  return (
    <DispatchContext.Provider value={dispatch}>
      <Navbar state={state} />
      <Sidebar state={state} />
      <Introduction />
      <Products />
    </DispatchContext.Provider>);
}
