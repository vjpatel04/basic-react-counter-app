import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import TopicsListPage from './TopicsListPage';
import TopicDetailPage from './TopicDetailPage';

const TopicsPage = props => {
    return (
        <Switch>
            <Route path='/topics' exact component={TopicsListPage}/> 
            <Route path='/topics/:name'  component={TopicDetailPage}/>
        </Switch>
    );
};

TopicsPage.propTypes = {

};

export default TopicsPage;