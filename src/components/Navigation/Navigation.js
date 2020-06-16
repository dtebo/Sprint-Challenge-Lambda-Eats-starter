import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <nav className='site-nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/help'>Help</NavLink>
            </nav>
        </>
    );
};

export default Navigation;