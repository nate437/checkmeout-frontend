/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as DOM from 'react-dom';


import SearchPreview from './search-preview.tsx';
import SearchBar from './search-bar.tsx';

var Search = React.createClass({

  render: function() {
	var data =[{"id":1,"name":"laptop","img_url":"https://i5.walmartimages.com/dfw/4ff9c6c9-2ac9/k2-_ed8b8f8d-e696-4a96-8ce9-d78246f10ed1.v1.jpg","store_id":"1","tag_id":"12344"}];
    return(
      <div>
      <SearchBar />
      <br/>
      <br/>
       <SearchPreview imgUrl={data[0].img_url}
              itemName={data[0].name} />
      </div>
    )
  }
});

export default Search;
