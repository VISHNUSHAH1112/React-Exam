import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import FilterItem from './Component/FilterItem'
import Product from './Component/Product'

function App() {

  return (
    <>
      <Navbar />
      <hr />
      <FilterItem />
      <hr />
      <Product />
    </>
  )
}

export default App
