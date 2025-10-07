import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './components/Header'
import Medsection from './pages/Medsection'
import Labsection from './pages/Labsection'
import Careathomesection from './pages/Careathomesection'
import Medicines from './pages/Medicines'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import MedProductPage from './pages/MedProductPage'
import About from './pages/about'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header/>
     <Routes>


      <Route path='/' element={<Landing/>}/>
      <Route path='/med' element={<Medsection/>}/>
      <Route path='/lab' element={<Labsection/>}/>
      <Route path='/care' element={<Careathomesection/>}/>
      <Route path='/medlist' element={<Medicines/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/pay' element={<Payment/>}/>
      <Route path='/prdts' element={<MedProductPage/>}/>
      <Route path='/about' element={<About/>}/>

     </Routes>
    </>
  )
}

export default App
