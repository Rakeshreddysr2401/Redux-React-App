import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedinLink=()=>{
    return(
        <ul className='right'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>LogOut</NavLink></li>
            <li><NavLink to='/' className='btn-floating pink lighten-1'>RR</NavLink></li>
        </ul>
    )
}
export default SignedinLink;