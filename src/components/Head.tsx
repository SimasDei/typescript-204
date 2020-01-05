import React from 'react';

type Props = {
  title: string;
  isActive: boolean;
};

const HeadComponent = ({ title, isActive }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};

export default HeadComponent;
