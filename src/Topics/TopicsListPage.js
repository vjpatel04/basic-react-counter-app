import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

const TopicsListPage = props => {
    return (
        <div>
            <h1>Topics Page</h1>
            <div className='list-group'>
                <NavLink className='list-group-item' activeClassName='mySelected' to={`${props.match.path}/ES6`}>ES6</NavLink>
                <NavLink className='list-group-item' to={`${props.match.path}/React`}>React</NavLink>
                <NavLink className='list-group-item' to={`${props.match.path}/Redux`}>Redux</NavLink>
            </div>
            <h3>Please select a topic</h3>
        </div>
    );
};

export default TopicsListPage;