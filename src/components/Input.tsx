import React, { useState, useRef } from 'react';

const Input = () => {
  const [name, setName] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  return <input type='text' value={name} onChange={e => setName(e.target.value)} ref={ref} />;
};

export default Input;
