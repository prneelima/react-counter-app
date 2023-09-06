import React from 'react';
import ButtonComponent from '../BaseComponents/ButtonComponent';
import CounterComponent from '../BaseComponents/CounterComponent';
import IsEvenComponent from '../BaseComponents/IsEvencomponent';
import withCounter from '../../hoc/withCounter';
import '../../App.css';

const Counter = ({ handleIncDec }) => {

    return (
        <div className='counter'>
            <CounterComponent />
            <ButtonComponent ButtonName='increment' btnClick={handleIncDec} ButtonText='Increment' />
            <ButtonComponent ButtonName='decrement' btnClick={handleIncDec} ButtonText='Decrement' />
            <IsEvenComponent />
        </div>
    )
}

export default withCounter(Counter);