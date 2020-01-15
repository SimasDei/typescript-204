import React, { Component } from 'react';

type BigCTypes = {
  title: string;
};

type StateTypes = {
  status: string;
};

export default class BigC extends Component<BigCTypes, StateTypes> {
  render() {
    return (
      <div>
        <h1>Ahoy Sailor o/</h1>
      </div>
    );
  }
}
