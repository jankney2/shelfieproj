import React, { Component } from 'react'
import '../CSS/header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {


  render() {
    return (
      <div className="header">

        <div className="headerLogo"></div>
        <p>Shelfie</p>

        <Link to="/">
          <button>Dashboard</button>
        </Link>

        <Link to="/form">
          <button>Add Inventory</button>
        </Link>



      </div>
    )
  }
}