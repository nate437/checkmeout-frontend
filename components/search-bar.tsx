/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

//STYLE IMPORTS
import '../sass/search-bar.scss';

interface SearchBarProps {
  action: (query:string)=>void;
}

class SearchBar extends React.Component<SearchBarProps,{}>{
  updateQuery(e:any){
    this.props.action(e.target.value);
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
