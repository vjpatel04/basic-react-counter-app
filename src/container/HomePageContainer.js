import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/counterActions';
import HomePage from '../Home/HomePage';

class HomePageContainer extends Component {
    render() {
        
        return (
            <HomePage counter={this.props.counter}  />
        );
    }
}

function mapStateToProps(state){
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actionTypes, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);