import React, { useState } from 'react'
import "./Navbar.scss"
import { Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [searchterm, setSearchTerm] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(searchterm){
      navigate(`/search/${searchterm}`)
      setSearchTerm("")
    }
  }


  return (
    <div className='navbar'>
      <Link to="/">
      <div className="logo">
            <img src="https://i.ibb.co/s9Qys2j/logo.png" alt="" />
            <h1>You
              <span>Tube</span>
            </h1>
        </div>
      </Link>
       
        <div className="searchbar">
           <form onSubmit={handleSubmit}>
            <input type="text" placeholder='search' value={searchterm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button type='submit'>
            <Search />
            </button>
           </form>
        </div>
    </div>
  )
}

export default Navbar