import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(new Date());


  return (
    <div>
      <h2>Current time: {time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Timer;
