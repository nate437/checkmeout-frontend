/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as DOM from 'react-dom';

import SearchPreview from './Search-Preview.tsx';

var Search = React.createClass({

  render: function() {
    return(
        <SearchPreview imgUrl="totallyAPicture" itemName="Test Item"/>
    )
  }
});

export default Search;
