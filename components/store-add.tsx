/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import StoreThumbnail from './store-thumbnail.tsx';
import AppSession from './session.tsx';
import * as $ from 'jquery';

import '../sass/add-store.scss'

interface AddStoreProps{
  updateAction: any;
}

interface AddStoreState{
  stores: any[];
}

class AddStore extends React.Component<AddStoreProps,AddStoreState>{
  constructor(){
    super();
    this.state = {stores:[]};
    this.updateData = this.updateData.bind(this);
    this.joinStore = this.joinStore.bind(this);
  }
  updateData(){
    var parent = this;
    $.ajax({
        type: "GET",
        url: "//api." + window.location.hostname + "/store",
        dataType: 'json',
        data: {
          id_token: AppSession['token'],
          user_id: AppSession['id']
        },
        success: function(newData){
          parent.setState({stores:newData.data});
        }
    });
  }
  componentDidMount(){
    this.updateData();
  }
  joinStore(sid:number){
    console.log("joining store" + sid);
    $.ajax({
        type: "GET",
        url: "//api." + window.location.hostname + "/store/add_user",
        dataType: 'json',
        data: {
          id_token: AppSession['token'],
          user_id: AppSession['id'],
          store_id: sid
        },
        success: function(newData){
          this.props.updateAction();
        }
    });
  }
  render(){
    var results = this.state.stores.map((store) => {
      return(
        <StoreThumbnail key={store.id} clickAction={() => {this.joinStore(store.id)}} location={store.location} imgUrl={store.img_url} name={store.name} />
      )
    });
    return(
      <div className="add-store-results">
      simply click on a thumbnail below to join a store
        {results}
      </div>
    )
  }
}

export default AddStore;
