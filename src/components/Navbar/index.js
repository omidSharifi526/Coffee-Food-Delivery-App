import React from 'react';
import {Nav,NavLink,NavIcon,Bars} from './NavElement';
import {NavLink as Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <Nav>
        
       <NavLink to='/'>pizaaaa</NavLink>
       <NavIcon>
           <p>menu</p>
           <Bars/>
       </NavIcon>

            </Nav>
            
        </div>
    )
}

export default Navbar
