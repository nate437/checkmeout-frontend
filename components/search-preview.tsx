/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

//STYLE IMPORTS
import '../sass/search-preview.scss';

interface SearchPreviewProps {
  imgUrl: string;
  itemName: string;
  checkedOut: string;
}

class SearchPreview extends React.Component<SearchPreviewProps,{}>{
  render(){
    var boxBackground = {
      backgroundImage: 'url('+this.props.imgUrl+')'
    }
    return(
     <div className={"searchpreview-square-box " + (this.props.checkedOut == "true" ? "taken" : "")} style={boxBackground}>
          <div className="searchpreview-text">{this.props.itemName}</div>
     </div>
    );
  }
}

export default SearchPreview;
