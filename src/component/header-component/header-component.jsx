import React from 'react';
import './header-component.style.scss';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../asset/crown.svg'

const header=()=>(
    <div className="header">
        <Link to='/' className="logo-container">
       <Logo  className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option" >Shop</Link>
            <Link to="/shop" className="option" >Contact</Link>
            
        </div>
    </div>
)
export default header