/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

//STYLE IMPORTS
import '../sass/store-thumbnail.scss';

interface StoreProps {
  name: string;
  location: string;
  imgUrl: string;
}

class StoreThumbnail extends React.Component<StoreProps, {}>{
  render() {
    var boxBackground = {
      backgroundImage: 'url(' + this.props.imgUrl +')'
    }
    return(
      <div className="store-thumbnail" style={boxBackground}>
        <div className="store-thumbnail-name">
          {this.props.name}
        </div>
        <br/>
        <div className="store-thumbnail-location">
          {this.props.location}
        </div>
      </div>
    )
  }
}

export default StoreThumbnail;
