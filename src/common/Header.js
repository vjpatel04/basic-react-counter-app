import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <nav className='navbar navbar-inverse'>
            <div className='container-fluid'>
                <ul className='nav navbar-nav'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/topics'>Topics</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;