import './App.css'
import React, { useReducer } from 'react'
import { reducer } from './Reducer/reducer'
import { myContext } from './Context/context'
import ContainerComponent from './Components/ContainerComponent'

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    show: false,
    items: [],
  })

  return (
    <myContext.Provider value={{ state, dispatch }}>
      <ContainerComponent />
    </myContext.Provider>
  )
}

