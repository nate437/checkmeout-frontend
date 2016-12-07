
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
  loading: boolean;
}

class Search extends React.Component<{},SearchState>{
  constructor(){
    super();
    this.state = {results:[], loading: true};
    this.updateData = this.updateData.bind(this);
  }
  updateData(query:string){
    this.setState({results: this.state.results, loading: true})
    var parent = this;
    if (query == ''){
      $.ajax({
          type: "GET",
          url: "//api." + window.location.hostname + "/item/status",
          data: {
            id_token: AppSession['token'],
            user_id: AppSession['id']
          },
          success: function(data){
            parent.setState({results:data.data.items, loading: false});
          }
      });
    }
    else{
      $.ajax({
          type: "GET",
          url: "//api." + window.location.hostname + "/item/search",
          data: {
            id_token: AppSession['token'],
            user_id: AppSession['id'],
            item_name: query
          },
          success: function(data){
            parent.setState({results:data.data.items, loading: false});
          }
      });
    }
  }
  componentDidMount(){
    this.updateData('');
  }
  render() {
    var results = this.state.results.map(function (item) {
      return(
        <SearchPreview key={item.id} imgUrl={item.img_url} itemName={item.name} checkedOut={item.checked_out}/>
      )
    });

    return(
      <div>
          <SearchBar action={this.updateData}/>
          <div className={"results-container" + (!this.state.loading ? '' : ' hidden')}>
            {results}
          </div>
          <div className={"center-frame" + (this.state.loading ? '' : ' hidden')}>
            <div className="loader"></div>
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
