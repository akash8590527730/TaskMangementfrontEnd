
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import TaskList from './Components/Task/TaskList'
import TaskCard from './Components/Task/TaskCard'
import Dashboard from './Components/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/tasklist' element={<TaskList/>}/>
      <Route path='/taskcard' element={<TaskCard/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>  
    </BrowserRouter>
  )
}

export default App
