import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function NavBar(){

    const [toggle, setToggle] = useState(false)

    const toggleNav = ()=>{
        setToggle(!toggle)
    }

    return(
        <div className='navBar'>
            <nav>
                {toggle && (
                    <ul className='unordered'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
    
    
                        <li>About</li>
                        <Link to='/programs'>
                        <li>Programs</li>
                        </Link>
                        
                        <li>Challanges</li>
                    </ul>
                )}
                

            </nav>
            <button onClick={toggleNav} className='closeBtn'>Btn</button>

            <h3>Login</h3>
        </div>
    )

}

export default NavBar;