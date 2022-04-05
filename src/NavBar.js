import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function NavBar(){

    const [toggle, setToggle] = useState(true)

    const toggleNav = ()=>{
        setToggle(!toggle)
    }

    return(
        <div className='navBar'>
            <nav>
                {toggle && (
                    <ul className='unordered'>
                    <Link to='/'>
                        <li>AMF</li>
                    </Link>
    
    
                        <li>Մեր մասին</li>
                        <Link to='/programs'>
                        <li>Ծրագիր</li>
                        </Link>
                        
                        <li>Challange</li>
                    </ul>
                )}
                

            </nav>
            <button onClick={toggleNav} className='closeBtn'>Menu</button>

            <h3>Login</h3>
        </div>
    )

}

export default NavBar;