import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateWallet from "./components/CreateWallet.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={App}>
       <CreateWallet />
    </div>
  )
}

export default App
