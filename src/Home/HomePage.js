import React from 'react';
import PropTypes from 'prop-types';

const HomePage = props => {

    const onIncrement = () => {
        props.actions.incrementCounter();
    }

    const onDecrement = () => {
        props.actions.decrementCounter();
    }

    return (
        <div>
            <h1>Home Page</h1>
            <h2>{props.counter}</h2>
            <button className='btn btn-info' onClick={onIncrement}>
                <span className='glyphicon glyphicon-plus'></span>
            </button>
            <button className='btn btn-danger' onClick={onDecrement}>
                <span className='glyphicon glyphicon-minus'></span>
            </button>
        </div>
    );
};

HomePage.propTypes = {
    
};

export default HomePage;