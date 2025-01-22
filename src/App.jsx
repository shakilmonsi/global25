
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import About from './components/Home/About'

function App() {

  return ( <BrowserRouter>
  
  <Routes>
    <Route path='/' element= {<Home/>}></Route>
    <Route path='/about' element= {<About/>}></Route>
     </Routes>
  </BrowserRouter>
 

    
    
  )
}

export default App
