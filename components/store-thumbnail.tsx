/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

//STYLE IMPORTS
import '../sass/store-thumbnail.scss';

var StoreThumbnail = React.createClass({
  render: function() {
    return(
      <div className="store-thumbnail">
        <div className="store-thumbnail-name">
          Fancy store name goes here.
        </div>
        <br/>
        <div className="store-thumbnail-location">
          Fancy location goes here.
        </div>
      </div>
    )
  }
});

export default StoreThumbnail;
