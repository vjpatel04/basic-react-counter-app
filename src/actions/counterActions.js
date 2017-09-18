import * as actionTypes from '../constants/counterActionTypes';

export function incrementCounter(){
    return {
        type: actionTypes.INCREMENT
    }
}

export function decrementCounter(){
    return {
        type: actionTypes.DECREMENT
    }
}