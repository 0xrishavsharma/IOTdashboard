import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import './App.scss'
import MainDash from './components/MainDash/MainDash'
import RightSide from './components/RightSide/RightSide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="appContainer">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  )
}

export default App
