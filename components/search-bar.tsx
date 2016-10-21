/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

//STYLE IMPORTS
import '../sass/search-bar.scss';

class SearchPreview extends React.Component<{},{}>{
  render(){
    return(
     <div className="searchbar-bar"></div>
    );
  }
}

export default SearchPreview;
