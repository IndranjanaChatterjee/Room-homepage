import { useState } from 'react'

import './App.css'
import Top from './Components/Top'
import Down from './Components/Down'
import Nav from './Components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Top/>
      <Down/>
    </>
  )
}

export default App
