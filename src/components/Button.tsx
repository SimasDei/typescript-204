import React from 'react';

type Props = {
  onClick: () => void;
};

const Button = ({ onClick }: Props) => {
  return <button onClick={onClick}>Hug me</button>;
};

export default Button;
