import React from 'react';
import Title from './Title';

function iframe() {
  return {
      __html: '<iframe src="./bangle.html" width="700" height="600"></iframe>'
  }
}

export default function Index() {
  return (
      <div>
          <Title>All Sensor Data</Title>

          <div dangerouslySetInnerHTML={iframe()} />
      </div>)
}