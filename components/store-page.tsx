/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as DOM from 'react-dom';
import RoundButton from './round-button.tsx';
import StoreThumbnail from './store-thumbnail.tsx';
import ButtonModal from './button-modal.tsx';

//STYLE IMPORTS
import '../sass/store-thumbnail.scss';

interface StoreState{
  data:string;
  showAddStores:boolean;
}

class Stores extends React.Component<{}, StoreState>{
  constructor(){
    super();
    this.state={data: "", showAddStores: false};
    this.toggleAddStores = this.toggleAddStores.bind(this);
  }
  toggleAddStores(){
    this.setState({data:this.state.data, showAddStores:false});
    //I know its weird, but working around react....
    this.setState({data:this.state.data, showAddStores:true});
  }
  render() {
    var data = [{"id":1,"name":"S&T Library","img_url":"https:\/\/media.glassdoor.com\/l\/a0\/c3\/2c\/36\/curtis-laws-wilson-library.jpg","location":"400 W 14th St, Rolla, MO 65409"}, {"id":2,"name":"S&T Library","img_url":"https:\/\/media.glassdoor.com\/l\/a0\/c3\/2c\/36\/curtis-laws-wilson-library.jpg","location":"400 W 14th St, Rolla, MO 65409"},{"id":3,"name":"S&T Library","img_url":"https:\/\/media.glassdoor.com\/l\/a0\/c3\/2c\/36\/curtis-laws-wilson-library.jpg","location":"400 W 14th St, Rolla, MO 65409"},{"id":4,"name":"S&T Library","img_url":"https:\/\/media.glassdoor.com\/l\/a0\/c3\/2c\/36\/curtis-laws-wilson-library.jpg","location":"400 W 14th St, Rolla, MO 65409"}];

    var results = data.map(function (store) {
      return(
        <StoreThumbnail key={store.id} location={store.location} imgUrl={store.img_url} name={store.name} />
      )
    });

    return(
      <div>
        <div className="view-header">
          <h1>My Stores </h1>
          <RoundButton text="add stores" action={this.toggleAddStores}/>
          <ButtonModal open={this.state.showAddStores} title="add stores">it works!</ButtonModal>
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
