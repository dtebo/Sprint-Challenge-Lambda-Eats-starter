import React from 'react';

import './Header.css';

import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className='site-header'>
            <h2>Lambda Eats</h2>
            <Navigation />
        </div>
    );
};

export default Header;