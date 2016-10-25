/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

//STYLE IMPORTS
import '../sass/search-bar.scss';

class SearchBar extends React.Component<{},{}>{
  render(){
    return(
      <div style={{marginBottom: 0}} className="view-header">
        <input type="text" className="searchbar-bar" placeholder="search"></input>
      </div>
    );
  }
}

export default SearchBar;
