import React, { useRef, useContext } from 'react';
import styled from 'styled-components';

import useClickOutside from '../hooks/useClickOutside';
import GlobalContext from '../global/state';

const ReducerButton = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const { rValue, turnOn, turnOff } = useContext(GlobalContext);

  useClickOutside(ref, () => console.log('💩'));

  return (
    <Wrapper ref={ref}>
      <button onClick={turnOn}>
        One{' '}
        <span role='img' aria-label='bee'>
          🐝
        </span>
      </button>
      <button onClick={turnOff}>2b</button>
      {rValue && 'Ahoy Sailor o/ ⛵'}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: 'orangered';
`;

export default ReducerButton;
