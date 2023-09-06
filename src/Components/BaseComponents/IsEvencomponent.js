import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

function IsEvenComponent() {
    const count = useSelector(state => state.count.count);

    const isEven = useMemo(() => {
        return count % 2 === 0;
    }, [count]);

    return (
        <p style={{ marginTop: "20px" }}>{isEven ? 'Even' : 'Odd'}</p>
    )
}

export default IsEvenComponent;