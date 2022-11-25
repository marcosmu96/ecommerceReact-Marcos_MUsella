import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import './components/NavBar/NavBar.css'
import './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
     <ItemListContainer saludo = {'Hola Coderhouse'}/>
    </>
  )
}

export default App
