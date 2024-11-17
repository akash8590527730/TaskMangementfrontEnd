
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import TaskList from './Components/Task/TaskList'
import TaskForm from './Components/Task/TaskForm'
import Dashboard from './Components/Dashboard'
import EditTask from './Components/Task/EditTask'

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/tasklist' element={<TaskList/>}/>
      <Route path='/taskform' element={<TaskForm/>}/>
      <Route path='/edit-task/:id' element={<EditTask/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>  
    </BrowserRouter>
  )
}

export default App
