import React, { useRef, useContext } from 'react';

import useClickOutside from '../hooks/useClickOutside';
import GlobalContext from '../global/state';

const ReducerButton = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const { rValue, turnOn, turnOff } = useContext(GlobalContext);

  useClickOutside(ref, () => console.log('💩'));

  return (
    <div ref={ref}>
      <button onClick={turnOn}>
        One{' '}
        <span role='img' aria-label='bee'>
          🐝
        </span>
      </button>
      <button onClick={turnOff}>2b</button>
      {rValue && 'Ahoy Sailor o/ ⛵'}
    </div>
  );
};

export default ReducerButton;
