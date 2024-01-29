import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardContact from './pages/DashboardContact/DashboardContact'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Home from './pages/home/Home'
import PageNotfound from './pages/Notfound/PageNotfound'
// import HeroSec from './components/hero/HeroSec'
// import { NavbarSimple } from './components/navbar/Navbar'
function App() {
  return (
    <>
      {/* <NavbarSimple/>
      <HeroSec/> */}
      {/* <Home/> */}

      {/* <Login/> */}

      {/* <Register/> */}

      {/* <DashboardContact/> */}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<DashboardContact/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<PageNotfound/>}/>


      </Routes>
    </>

   
  )
}

export default App