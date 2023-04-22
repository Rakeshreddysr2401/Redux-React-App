import React from 'react';
import {Link} from 'react-router-dom';
import SignedinLink from './SignedinLink';
import SignedoutLink from './SignedoutLink';
const Navbar=()=>{
    return(
        <nav className='nav-wrapper grey darken-3'>
            <div className="container">
                <Link to="/" className="brand-logo">Bheemio</Link>
                <SignedinLink/>
                <SignedoutLink/>
            </div>
        </nav>
    )
}
export default Navbar;