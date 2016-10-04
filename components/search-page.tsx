/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as DOM from 'react-dom';

import '../sass/main.scss';

var Search = React.createClass({
  alert: function(){
    alert("Welcome to the search!")
  },

  render: function() {
    return(
        <h1 onClick={this.alert}>Hello {this.props.name} Welcome to the search.</h1>
    )
  }
});

export default Search;
