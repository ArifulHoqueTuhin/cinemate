import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRouter from './routes/allroutes'
import { Header } from './component'
import { Footer } from './component'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Header />
       <AllRouter />
       <Footer />
     </div>
    </>
  )
}

export default App
