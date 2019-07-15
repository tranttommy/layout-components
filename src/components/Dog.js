import React from 'react';

export default function Dog() {
  const dog = {
    name: 'Fafa',
    age: 5,
    weight: '45 lbs'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{ dog.name }</dd>

      <dt>Age</dt>
      <dd>{ dog.age }</dd>

      <dt>Weight</dt>
      <dd>{ dog.weight }</dd>
    </dl>
  );
}
