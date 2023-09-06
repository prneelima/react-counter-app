import React from 'react';
import { incrementCounter, decrementCounter } from '../actions/CounterActions';
import { useDispatch } from 'react-redux';

const withCounter = (Component) => {

    const Counter = (props) => {

        const dispatch = useDispatch();

        const IncrementDecrement = (buttonName) => {
            switch (buttonName) {
                case 'increment': {
                    dispatch(incrementCounter());
                    break;
                }
                case 'decrement': {
                    dispatch(decrementCounter());
                    break;
                }
                default:
                    break;
            }
        }
        return (
            <Component
                {...props}
                handleIncDec={IncrementDecrement}
            />
        )
    }

    return Counter;
}

export default withCounter;
