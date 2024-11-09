

import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/custom/Header'
import Footer from './view-trip/components/Footer'


function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
