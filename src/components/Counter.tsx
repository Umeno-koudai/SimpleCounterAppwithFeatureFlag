import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    const showNewButton = import.meta.env.VITE_FEATURE_NEW_BUTTON === 'true';

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount((prev) => prev+1)}>Increment</button>
            {showNewButton && (
                <button onClick={() => setCount(0)} style={{marginLeft: '10px'}}>ResetCounter</button>
            )}
        </div>
    );
};

export default Counter;