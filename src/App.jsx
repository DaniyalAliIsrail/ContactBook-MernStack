import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardContact from './pages/DashboardContact/DashboardContact'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Home from './pages/home/Home'
import PageNotfound from './pages/Notfound/PageNotfound'
import Protectedroutes from '../routes/protectedroutes'
import AuthenticateRoute from '../routes/AuthenticateRoute'

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route element={<AuthenticateRoute/>} >
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<PageNotfound/>}/>
      </Route>
        <Route element={<Protectedroutes/>}>
        <Route path='/dashboard' element={<DashboardContact/>} />
        </Route>
      </Routes>
      
    </>

   
  )
}

export default App