/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

//STYLE IMPORTS
import '../sass/search-bar.scss';

interface SearchBarProps {
  action: (query:string)=>void;
}

interface SearchBarState{
  timer: number;
}

class SearchBar extends React.Component<SearchBarProps,SearchBarState>{
  constructor(){
    super();
    this.state={
      timer: 0
    }
  }
  updateQuery(e:any){
    e.persist();
    var parent = this;
    clearTimeout(this.state.timer);
    var newTimer = setTimeout(function(){parent.props.action(e.target.value)},250);
    this.setState({timer: newTimer})
  }
  render(){
    return(
      <div style={{marginBottom: 0}} className="view-header">
        <input type="text" onChange={this.updateQuery.bind(this)} className="searchbar-bar" placeholder="search"></input>
      </div>
    );
  }
}

export default SearchBar;
