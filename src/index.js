import React from 'react'
import ReactDOM from 'react-dom'
import shortid from 'shortid'
import seedrandom from 'seedrandom'
import urljs from 'urljs'

import Display from './Display'

let seed = urljs.queryString('seed')

if (seed === undefined) {
  seed = shortid.generate()
  urljs.updateSearchParam('seed', seed)
}

seedrandom(seed, { global: true })

const urls = [
  'http://d33tz7arw1d3eu.cloudfront.net/0246474/8a34d3b6117b182469635e65aabb14f7-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/91d4134c443a13545360e431abd5db48-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/93b0133eccf595cd7af8793912df5939-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/7f2ce889a1a63e121f0cd9b5d86aedd9-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/0a98ef1f0d7aa79085aff5b279e6d583-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/a02f7f0e5443d134fd4cd9e8b526d01a-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/156e7bee94cb15829c060b8501ab8fda-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/0a98ef1f0d7aa79085aff5b279e6d583-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/bb9d9bd791a9c7566cfdb994b5578bb1-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/f85f5f7709548e952ad41f8ce407fccf-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/acca056f4c465f4bf5f0cc1a6b195187-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/156e7bee94cb15829c060b8501ab8fda-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/a02f7f0e5443d134fd4cd9e8b526d01a-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/cb2f1b2664fd3bb7ee1e4f23f4e1e588-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/e6e1373337eb1f07fdd427d5e64c0f76-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/d63213c389f50d0be780bf43784708fe-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/fac14c8638ed91ed2650bc577e857bfd-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/58c25f25dbc0bd08395b4e9594856e6a-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/e03a8d1bd82d128af8626f91725676ce-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/13c8c0efcc09b1dc9d4e920c61def9b2-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/920bf0110616bdb43dcd70eac6cffb9c-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/88788f4ed9e271c85b6e8dc9a45c7e1d-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/9cdd1dd0be739cf5b903ba1996683c7a-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/f9e1cea006e422f6b2da45e71b35798b-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/ece3dd2d8ed1698f218d112738400b78-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/cfa15d7e05c33d87ce4d11c7d1d5ae85-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/6b3675c413e81c5e536544c34d36e9f4-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/bdaaa41ff819999c89a8320df47f8f97-large.jpg',
  'http://d33tz7arw1d3eu.cloudfront.net/3047474/37438fc8fe5935bec0d5009933ee4bed-large.jpg'
]

ReactDOM.render(
  <div>
    <Display urls={urls} initialSeed={seed} isShuffling={urljs.queryString('isShuffling')} />
  </div>,
  document.getElementById('app')
)
