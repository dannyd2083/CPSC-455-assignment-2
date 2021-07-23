import React from 'react';
import {Link} from  'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <Link to = '/'> Home </Link>
                <Link to = '/about'> About the Project</Link>
            </nav>
        </div>
    );
};

export default Navbar;
