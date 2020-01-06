import React, { useState } from 'react';

const Input = () => {
  const [name, setName] = useState<string>('');

  return <input type='text' value={name} onChange={e => setName(e.target.value)} />;
};

export default Input;
