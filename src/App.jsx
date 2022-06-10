import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import './App.scss'
import Maindash from './components/maindash/Maindash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="appContainer">
        <Sidebar />
        <Maindash />
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default App
