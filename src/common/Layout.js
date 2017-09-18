import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import HomePageContainer from '../container/HomePageContainer';
import AboutPage from '../About/AboutPage';
import TopicsPage from '../Topics/TopicsPage';

const Layout = props => {
    return (
        <div className='container-fluid'>
            <Header />
            <main>
                <Switch>
                    <Route path='/' exact component={HomePageContainer} />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/topics' component={TopicsPage} /> 
                    <Redirect to='/' />
                </Switch>
            </main>
        </div>
    );
};

Layout.propTypes = {

};

export default Layout;