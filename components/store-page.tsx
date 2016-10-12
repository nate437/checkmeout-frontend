/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as DOM from 'react-dom';


var Stores = React.createClass({
  alert: function(){
    alert("Welcome to the search!")
  },

  render: function() {
    return(
        <h1> Welcome to the stores.</h1>
    )
  }
});

export default Stores;
