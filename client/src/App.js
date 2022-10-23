import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Main from "./pages/Main"
import AddTravelBook from "./pages/AddTravelBook"
import UpdateTravelBook from "./pages/UpdateTravelBook"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/add" element={<AddTravelBook />}></Route>
        <Route path="/update/:id" element={<UpdateTravelBook />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App