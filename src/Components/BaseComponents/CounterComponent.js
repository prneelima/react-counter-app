import React from 'react';
import { useSelector } from 'react-redux';

function CounterComponent() {
    const count = useSelector((state) => state.count.count);
    return (
        <h1 style={{ marginTop: "20px" }}>Counter: {count}</h1>
    )
}

export default CounterComponent;