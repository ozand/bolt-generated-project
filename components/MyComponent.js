import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      {isBrowser && <button onClick={() => setCount(count + 1)}>Increment</button>}
    </div>
  );
};

export default MyComponent;
