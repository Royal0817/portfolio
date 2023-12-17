import React, { useState, useEffect } from 'react';


const words = [
  '/ Software Developer ',
  '/ Marine Veteran',
  '/ Master Mixologist',
  '',
  '',
];

const skipDelay = 9;
const speed = 80;

const Occupations = () => {
  const [part, setPart] = useState('');
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true); 
          setI((i + 1) % words.length);
          setOffset(0);
        }
      }

      setPart(words[i].substr(0, offset));

      if (skipCount === 0) {
        if (forwards) {
          setOffset(offset + 1);
        } else {
          setOffset(offset - 1);
        }
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [i, offset, forwards, skipCount]);

  return <div>{part}</div>;
};

export default Occupations;
