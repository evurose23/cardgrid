import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Reg from './components/Reg'
import Basictable from './components/Basictable'
import BasicCard from './components/BasicCard'
import CardGrid from './components/CardGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1>hello world</h1>
     <First/> */}
      {/*<Reg/>*/}
     {/* <Basictable/>*/}
     {/*<BasicCard/>*/}
     <CardGrid/>

    </>
  )
}

export default App
