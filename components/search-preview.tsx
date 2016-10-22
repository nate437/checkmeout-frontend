/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

//STYLE IMPORTS
import '../sass/search-preview.scss';

interface SearchPreviewProps {
  imgUrl: string;
  itemName: string;
  descriptor?: string;
}

class SearchPreview extends React.Component<SearchPreviewProps,{}>{
  render(){
    var boxBackground = {
      backgroundImage: 'url('+this.props.imgUrl+')'
    }
    if (!!this.props.descriptor){
      return(
       <div className="searchpreview-square-box" style={boxBackground}>
            <div className="searchpreview-text">{this.props.itemName}</div>
            <div className="searchpreview-text">{this.props.descriptor}</div>
       </div>
      );
    }
    else{
      return(
       <div className="searchpreview-square-box" style={boxBackground}>
            <div className="searchpreview-text">{this.props.itemName}</div>
       </div>
      );
    }
  }
}

export default SearchPreview;
