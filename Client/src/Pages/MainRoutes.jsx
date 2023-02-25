import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditGames from './EditGames'
import Games from './Games'
import Login from './Login'
import SingleGames from './SingleGames'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Games/>}/>
        <Route path='/games/:id' element={<SingleGames/>}/>
        <Route path='/games/:id/edit' element={<EditGames/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<h3>Page Not Found</h3>}/>
    </Routes>
  )
}

export default MainRoutes 