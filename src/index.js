import React from 'react'
import ReactDOM from 'react-dom'
import BoxPortal from '../lib/components/BoxPortal'

ReactDOM.render(
  <div>
    <BoxPortal />
    <BoxPortal
      size={"large"}
      src={"http://d33tz7arw1d3eu.cloudfront.net/0246474/8a34d3b6117b182469635e65aabb14f7-large.jpg"} />
  </div>,
  document.getElementById('app')
)
