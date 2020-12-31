import React from 'react'
import { reducer } from './Reducer/reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Navbar from './Components/Navbar'
import Introduction from './Components/Introduction'
import Products from './Components/Products'
import Sidebar from './Components/Sidebar'
import './App.css'

export default function App() {
  const store = createStore(reducer)

  return (
    <Provider store={store}>
      <Navbar />
      <Sidebar />
      <Introduction />
      <Products />
    </Provider>);
}
