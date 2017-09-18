import React from 'react';
import PropTypes from 'prop-types';

const TopicDetailPage = props => {

    const navigateBack = () => {
        props.history.push('/topics');
    }

    return (
        <div>
            <h2>{props.match.params.name}</h2>
            <button className='btn btn-default' onClick={navigateBack}>Go Back</button>
        </div>
    );
};

export default TopicDetailPage;