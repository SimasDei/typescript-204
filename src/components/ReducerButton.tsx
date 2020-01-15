import React, { useReducer, useRef, useContext } from 'react';

import useClickOutside from '../hooks/useClickOutside';
import GlobalContext from '../global/state';

const ReducerButton = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const { rValue } = useContext(GlobalContext);

  useClickOutside(ref, () => console.log('💩'));

  return (
    <div ref={ref}>
      <button onClick={() => dispatch({ type: 'one' })}>
        One{' '}
        <span role='img' aria-label='bee'>
          🐝
        </span>
      </button>
      <button onClick={() => dispatch({ type: 'two' })}>2b</button>
      {rValue && 'Ahoy Sailor o/ ⛵'}
    </div>
  );
};

export default ReducerButton;
