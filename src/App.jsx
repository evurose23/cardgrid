import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Reg from './components/Reg'
import Basictable from './components/Basictable'
import BasicCard from './components/BasicCard'
import CardGrid from './components/CardGrid'
import { Route, Routes } from 'react-router-dom'
import Datainput from './components/Datainput'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
  
    <Routes>
     <Route path='/' element={<First/>}/>
      
     <Route path='/d' element={<Datainput/>}/>
      </Routes> 
      </>
      )
}


export default App