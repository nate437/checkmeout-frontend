/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

//STYLE IMPORTS
import '../sass/search-preview.scss';

interface SearchPreviewProps {
  imgUrl: string;
  itemName: string;
}

class SearchPreview extends React.Component<SearchPreviewProps,{}>{
  render(){
    var boxBackground = {
      backgroundImage: 'url('+this.props.imgUrl+')'
    }
    return(
     <div className="searchpreview-square-box" style={boxBackground}>
          <br/>
          <div className="searchpreview-text">{this.props.itemName}</div>
     </div>
    );
  }
}

export default SearchPreview;
