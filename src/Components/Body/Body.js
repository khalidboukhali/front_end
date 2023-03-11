import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProjectBody from '../Pages/create_project/Steps_Container/CreateProjectBody'
import { Dashboard } from '../Pages/DashBoardContent/Dashboard'

export const Body = () => {
  return (
    <div className='main-content'>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='createProject' element={<CreateProjectBody />} />
        </Routes>
    </div>
  )
}
