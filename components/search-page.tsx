
/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as DOM from 'react-dom';

import SearchPreview from './search-preview.tsx';
import SearchBar from './search-bar.tsx';
import * as $ from 'jquery';
import AppSession from './session.tsx';

interface SearchState {
  results: any[];
}

class Search extends React.Component<{},SearchState>{
  constructor(){
    super();
    this.state = {results:[]};
    this.updateData = this.updateData.bind(this);
  }
  updateData(){
    var parent = this;
    $.ajax({
        type: "GET",
        url: "//api." + window.location.hostname + "/item",
        data: {
          id_token: AppSession['token']
        },
        success: function(data){
          parent.setState({results:data.data});
        }
    });
  }
  componentDidMount(){
    this.updateData();
  }
  render() {
    var results = this.state.results.map(function (item) {
      return(
        <SearchPreview key={item.id} imgUrl={item.img_url} itemName={item.name} />
      )
    });

    //TODO: remove searchbar and replace with actual components
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
};

export default Search;
