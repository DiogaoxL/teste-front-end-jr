import { useState } from 'react'
import { Home } from './pages/home'
import './App.scss'

interface ProductProps {
  
  productName: string
  descriptionShort: string
  photo: string
  price: string
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
