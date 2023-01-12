import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Chi from './Chi'
import Header from './Header'
import Main from './Main'
import Pug from './Pug'

function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Main />}>
            <Route path='/pug' element={<Pug />} />
            <Route path='/chi' element={<Chi />} />
        </Route>
    </Routes>
  )
}

export default AppRouter