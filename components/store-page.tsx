/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import RoundButton from './round-button.tsx';
import StoreThumbnail from './store-thumbnail.tsx';
import ButtonModal from './button-modal.tsx';
import AppSession from './session.tsx';
import * as $ from 'jquery';
import AddStore from './store-add.tsx'

//STYLE IMPORTS
import '../sass/store-thumbnail.scss';

interface StoreState{
  data:any[];
  showAddStores:boolean;
  loading: boolean;
}

class Stores extends React.Component<{}, StoreState>{
  constructor(){
    super();
    this.state={data: [], showAddStores: false, loading: true};
    this.toggleAddStores = this.toggleAddStores.bind(this);
    this.updateData = this.updateData.bind(this);
  }
  updateData(){
    var parent = this;
    this.setState({data: this.state.data, showAddStores: this.state.showAddStores, loading: true});
    $.ajax({
        type: "GET",
        url: "//api." + window.location.hostname + "/user/stores",
        dataType: 'json',
        data: {
          id_token: AppSession['token'],
          user_id: AppSession['id']
        },
        success: function(newData){
          parent.setState({data:newData.stores, showAddStores: parent.state.showAddStores, loading: false});
        }
    });
  }
  componentDidMount(){
    this.updateData();
  }
  toggleAddStores(){
    this.setState({data:this.state.data, showAddStores:false, loading: false});
    //I know its weird, but working around react...
    this.setState({data:this.state.data, showAddStores:true, loading: false});
  }
  render() {
    var results = this.state.data.map(function (store) {
      return(
        <StoreThumbnail key={store.id} location={store.location} imgUrl={store.img_url} name={store.name}/>
      )
    });

    return(
      <div>
        <div className="view-header">
          <h1>My Stores </h1>
          <RoundButton text="add stores" action={this.toggleAddStores}/>
          <ButtonModal open={this.state.showAddStores} title="Add Stores"><AddStore updateAction={this.updateData}/></ButtonModal>
        </div>

        <div className="results-container">
          {results}
        </div>
        <div className={"center-frame" + (this.state.loading ? '' : ' hidden')}>
          <div className="loader"></div>
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
