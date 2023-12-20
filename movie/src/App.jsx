import { useState } from 'react'
import Header from './pages/Header'
import Banner from './pages/Banner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner/>
    </>
  )
}

export default App
