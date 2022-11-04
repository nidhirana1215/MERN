import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import CreateStudent from './comp/CreateStudent'
import DisplayStudent from './comp/DisplayStudent'
import Login from './comp/Login'
import Header from './comp/Header'
import Logout from './comp/Logout'
import UpdateStudent from './comp/UpdateStudent'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<DisplayStudent/>} exact />  
        <Route path='/AddStudents' element={<CreateStudent/>} exact />
        <Route path='/UpdateStudent/:id' element={<UpdateStudent/>} exact />
        <Route path='/Login' element={<Login/>} exact />
        <Route path='/Logout' element={<Logout/>} exact />
        <Route path='*' element={<DisplayStudent/>} exact />
      </Routes>
      {/* <CreateStudent />
      <DisplayStudent />
      <Login /> */}
    </div>
  )
}

export default App
