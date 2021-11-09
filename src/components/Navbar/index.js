import React from 'react';
import {Nav,NavLink,NavIcon,Bars} from './NavElement';
import {NavLink as Link} from 'react-router-dom';


const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
        
       <NavLink to='/'>الو کافی</NavLink>
       <NavIcon onClick={toggle} >
           <p>خانه</p>
           <Bars/>
       </NavIcon>

            </Nav>
            
        </div>
    )
}

export default Navbar
