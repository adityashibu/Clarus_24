import React, { useState, useEffect } from 'react';

const Counter = ({ endCount }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const increment = () => {
            if (count < endCount) {
                setCount((prevCount) => prevCount + 1);
            }
        };

        const interval = setInterval(increment, 10); // Adjust interval speed as needed

        return () => clearInterval(interval);
    }, [count, endCount]);

    return <div className="text-customBlue font-aquirebold text-[400%]">{count}</div>;
};

export default Counter;
