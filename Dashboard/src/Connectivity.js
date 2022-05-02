import React from 'react';
import Title from './Title';

function iframe() {
  return {
      __html: '<iframe src="./connectivity.html" width="500" height="200"></iframe>'
  }
}

export default function Connection() {


  return (
      <div>
          <Title>Connected?</Title>

          <div dangerouslySetInnerHTML={iframe()} />
      </div>)
}