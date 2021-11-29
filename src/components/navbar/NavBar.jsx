import React from 'react';
import logo from "./logo.png"
import { Link } from 'react-router-dom'
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.scss'



const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const links = [
      {name: 'Celulares', url: '/category/celulares'},
      {name: 'Computadoras', url: '/category/computadoras'},
      {name: 'Tablets', url: '/category/tablets'},  
    ];
  
  return(
      <header >
            <nav className="navbar-items">
                <Link to='/' className="navbar-logo">
                    <img src={logo} alt={"logo"}/>
                </Link>
                <ul className="nav-menu">
                    {links.map((link, i) => {
                    return (<li  key={i}><Link className="nav-link" to={link.url}>{link.name}</Link></li>)
                    })}
                </ul>
                <Link to='/cart'><CartWidget/></Link>
            </nav>
      </header>
      
  )
  
}
export default NavBar
