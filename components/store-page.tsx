/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as DOM from 'react-dom';
import RoundButton from './round-button.tsx';
import StoreThumbnail from './store-thumbnail.tsx';

interface StoreState{
  data:string[];
}

class Stores extends React.Component<{}, StoreState>{
  // getInitialState() {
  //   return {data: []};
  // },
  // componentDidMount {
  //   $.ajax({
  //     url: 'api.checkmeout.dev/store',
  //     dataType: 'json',
  //     type: 'GET',
  //     cache: false,
  //     success(data) {
  //       this.setState({data: data});
  //     },
  //     error(xhr, status, err) {
  //       console.error('api.checkmeout.dev/store', status, err.toString())
  //     }
  //   })
  // },
  render() {
    var data = [{"id":1,"name":"S&T Library","img_url":"https:\/\/media.glassdoor.com\/l\/a0\/c3\/2c\/36\/curtis-laws-wilson-library.jpg","location":"400 W 14th St, Rolla, MO 65409"}];

    var results = data.map(function (store) {
      return(
        <StoreThumbnail key={store.id} location={store.location} imgUrl={store.img_url} name={store.name} />
      )
    });
    
    return(
      <div>
        <div className="view-header">
        <h1 style={{float: 'left'}}>My Stores </h1>
        <RoundButton style={{float: 'right'}} text="add stores" action={function(){}}/>
        </div>

        <div className="results-container">
          {results}
        </div>

        <div className="end-text">
          Thats all folks!
          <br/>
          You can add more stores by clicking 'add stores' above.
        </div>
      </div>
    )
  }
}

export default Stores;
