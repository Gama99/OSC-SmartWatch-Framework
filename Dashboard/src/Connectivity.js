import React from 'react';
import Title from './Title';

function iframe() {
  return {
      __html: '<iframe src="./connectivity.html" width="250" height="100"></iframe>'
  }
}

export default function Connection() {
  return (
      <div>
          <Title>Connected?</Title>

          <div dangerouslySetInnerHTML={iframe()} />
      </div>)
}