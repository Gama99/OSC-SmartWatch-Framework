import React from 'react';
import Title from './Title';

function iframe() {
  return {
      /*__html: '<iframe src="./bangle.html" width="600" height="200"></iframe>'*/
      __html: '<iframe src="./test.html" width="600" height="600"></iframe>'
  }
}

export default function Index() {
  return (
      <div>
          <Title>Live Accelerometer Output</Title>

          <div dangerouslySetInnerHTML={iframe()} />
      </div>)
}