import React from 'react';
import Title from './Title';

function iframe() {
  return {
      __html: '<iframe src="./location.html" width="400" height="400"></iframe>'
  }
}

export default function Location() {
  return (
      <div>
          <Title>Location Data</Title>

          <div dangerouslySetInnerHTML={iframe()} />
      </div>)
}