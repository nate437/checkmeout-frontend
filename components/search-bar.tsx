/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

//STYLE IMPORTS
import '../sass/search-bar.scss';

class SearchPreview extends React.Component<{},{}>{
  render(){
    return(
     <input type="text" className="searchbar-bar"></input>
    );
  }
}

export default SearchPreview;
