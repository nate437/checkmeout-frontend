/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as DOM from 'react-dom';

import StoreThumbnail from './store-thumbnail.tsx';

var Stores = React.createClass({
  render: function() {
    return(
      <div>
        <div>

        </div>
        <div>
          <StoreThumbnail />
          <StoreThumbnail />
          <StoreThumbnail />
          <StoreThumbnail />
          <StoreThumbnail />
        </div>
        <div>

        </div>
      </div>
    )
  }
});

export default Stores;
