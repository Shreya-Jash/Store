import React from 'react'
import "../styles/Navbar.css"
import {BsFillCartFill} from "react-icons/bs"
import { NavLink } from 'react-router-dom'

export default function Navbar({size}) {
  return (
    <nav>
        <div className='shop-name'>
            <NavLink to="/" className='shop-logo'>
                <p>
                    <span>D</span>URGA<span>M</span>ATA
                </p>
                <p>
                    <span>H</span>ARDWARE
                </p>
                <p>
                    <span>S</span>TORE
                </p>
            </NavLink>
        </div>
        <div className='nav-container'>
            <ul>
                <li>
                    <NavLink to="/ParentProduct">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/Cart" className='cart'><BsFillCartFill /><span>{size}</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Login" className='signUp'>Login/Register</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}
