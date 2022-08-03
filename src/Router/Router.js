import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Main from '../pages/Main'
import Navbar from "../components/Navbar"
import Register from "../pages/Register"
import Login from "../pages/Login"
import {MovieDetail} from "../pages/MovieDetail"



import React from 'react'

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/details/:id" element={<MovieDetail />}></Route>
        </Routes>
    </Router>
  )
}

export default AppRouter
