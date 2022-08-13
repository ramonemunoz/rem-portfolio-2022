import React, { useState, useEffect } from 'react';

export default function CurrentTime() {

    const [time, setTime] = useState();

    useEffect(() => {
        const currentTime = setInterval(() => {
          const t = new Date();
          setTime(t.toLocaleString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 1000);
      
        return () => clearInterval(currentTime);
      });

  return (
    <p>{`${time} PST`}</p>
  )
}