<<<<<<< HEAD
/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as DOM from 'react-dom';

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
    return(
      <div>
        <div>

        </div>

        <div>
          <StoreThumbnail name={data[0].name} location={data[0].location} imgUrl={data[0].img_url} />
        </div>

        <div>

        </div>
      </div>
    )
  }
}

export default Stores;
=======
/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as DOM from 'react-dom';

import StoreThumbnail from './store-thumbnail.tsx';

var Stores = React.createClass({
  render: function() {
    return(
      <div>
        <div>

        </div>
        <div>
          <StoreThumbnail />
          <StoreThumbnail />
          <StoreThumbnail />
          <StoreThumbnail />
          <StoreThumbnail />
        </div>
        <div>

        </div>
      </div>
    )
  }
});

export default Stores;
>>>>>>> 8b2014ae695c69d02b0329b931fa4430ef55c1e5
