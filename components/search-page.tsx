
/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as DOM from 'react-dom';

import SearchPreview from './search-preview.tsx';
import SearchBar from './search-bar.tsx';

var Search = React.createClass({

  render: function() {
    var data =[{"id":1,"name":"HP Laptop","img_url":"https://i5.walmartimages.com/dfw/4ff9c6c9-2ac9/k2-_ed8b8f8d-e696-4a96-8ce9-d78246f10ed1.v1.jpg"},
              {"id":2,"name":"Macbook Pro","img_url":"https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2014/01/29-macbookpro-retina.jpg"}];

    var results = data.map(function (item) {
      return(
        <SearchPreview key={item.id} imgUrl={item.img_url} itemName={item.name} />
      )
    });

    return(
      <div>
          <SearchBar />
          <div className="results-container">
            {results}
          </div>
          <div className="end-text">
            Thats all of the results we could find for that search!
            <br/>
            Try refining your search to see more results.
          </div>
      </div>
    )
  }
});

export default Search;
