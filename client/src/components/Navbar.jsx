import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-dark bg-dark mb-3'>
            <div className="container-fluid px-5 py-2">
                <Link to="/" className="navbar-brand text-warning"><h1>Travel Book</h1></Link>
                <Link to="/add"><button className='btn btn-warning btn-lg px-5'>Add</button></Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar