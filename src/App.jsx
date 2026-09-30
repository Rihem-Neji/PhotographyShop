import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbarr from './components/Navbarr';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='parent'>
    <Navbarr/>
    <Header/>
    <Body/>
    <Footer/>

  </div>
  )
}

export default App
