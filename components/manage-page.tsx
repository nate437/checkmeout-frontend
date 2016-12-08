/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import AppSession from './session.tsx'
import RoundButton from './round-button.tsx';
import SubHeader from './sub-header.tsx';
import Summary from './summary.tsx';
import ButtonModal from './button-modal.tsx';
import * as $ from 'jquery';
import SearchPreview from './search-preview.tsx'

import '../sass/manage.scss';

interface ManageState {
  showEditStore?: boolean;
  storeData?: any;
  storeIndex?: number;
  storeItems?: any;
  itemLoading?: boolean;
  storeLoading?: boolean;
  checkedOutItems?: number;
}

class Manage extends React.Component<{},ManageState>{
  constructor(){
    super();
    this.state = {
      showEditStore: false,
      storeData: [],
      storeIndex: 0,
      storeItems:[],
      itemLoading: true,
      storeLoading: true,
      checkedOutItems: 0
    }
    this.openEdit = this.openEdit.bind(this);
    this.getData = this.getData.bind(this);
    this.getItems = this.getItems.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.changeStore = this.changeStore.bind(this);
    this.getData();
  }
  getItems(){
    var parent = this;
    parent.setState({showEditStore: parent.state.showEditStore,
    storeData: parent.state.storeData, storeIndex: parent.state.storeIndex,
    storeItems: parent.state.storeItems, itemLoading: true, checkedOutItems:0});
    $.ajax({
        type: "GET",
        url: "//api." + window.location.hostname + "/store/items",
        dataType: 'json',
        data: {
          id_token: AppSession['token'],
          user_id: AppSession['id'],
          store_id: parent.state.storeData[parent.state.storeIndex].id
        },
        success: function(newData){
          var coi =0;
          $.each(newData.items, function(i, val){
            if(val.checked_out == "true"){
              coi++;
            }
          });
          parent.setState({showEditStore: parent.state.showEditStore,
          storeData: parent.state.storeData, storeIndex: parent.state.storeIndex,
          storeItems: newData.items, itemLoading: false, checkedOutItems: coi});
        }
    });
  }
  getData(){
    var parent = this;
    parent.setState({showEditStore: parent.state.showEditStore,
    storeData: parent.state.storeData, storeIndex: parent.state.storeIndex, storeLoading: true});
    $.ajax({
        type: "GET",
        url: "//api." + window.location.hostname + "/user/owned_stores",
        dataType: 'json',
        data: {
          id_token: AppSession['token'],
          user_id: AppSession['id']
        },
        success: function(newData){
          parent.setState({showEditStore: parent.state.showEditStore,
          storeData: newData.stores, storeIndex: parent.state.storeIndex, storeLoading: false});
          parent.getItems();
        }
    });
  }
  openEdit(){
    this.setState({showEditStore: true, storeData: this.state.storeData, storeIndex: this.state.storeIndex});
  }
  changeStore(e:any){
    this.setState({showEditStore: this.state.showEditStore,
    storeData: this.state.storeData, storeIndex: e.target.value}, this.getItems);

  }
  saveChanges(){
    var parent = this;
    parent.setState({
      storeLoading: true,
      itemLoading: true,
      showEditStore: false
    })
    $.ajax({
        type: "GET",
        url: "//api." + window.location.hostname + "/store/update/",
        dataType: 'json',
        data: {
          id_token: AppSession['token'],
          user_id: AppSession['id'],
          store_id: parent.state.storeData[parent.state.storeIndex].id,
          name: $("#newName").val() != '' ? $("#newName").val() : parent.state.storeData[parent.state.storeIndex].name,
          img_url: $("#newImg").val() != '' ? $("#newImg").val() : parent.state.storeData[parent.state.storeIndex].img_url,
          location: $("#newLocation").val() != '' ? $("#newLocation").val() : parent.state.storeData[parent.state.storeIndex].location
        },
        success: function(newData){
          parent.getData();
        }
    });
  }
  render(){
    var storeOptions = this.state.storeData.map(function(store:any, i:any){
      return(
        <option key={i} value={i}>{store.name}</option>
      )
    });
    var items = this.state.storeItems.map(function(item:any, i:any){
      return(
        <SearchPreview key={item.id} imgUrl={item.img_url} itemName={item.name} checkedOut={item.checked_out}/>
      )
    });
    var sName = !!this.state.storeData[this.state.storeIndex] ? this.state.storeData[this.state.storeIndex].name : ''
    var sLocation = !!this.state.storeData[this.state.storeIndex] ? this.state.storeData[this.state.storeIndex].location : ''
    var sImg = !!this.state.storeData[this.state.storeIndex] ? this.state.storeData[this.state.storeIndex].img_url : ''
    return(
      <div>
        <div className="view-header">
          <h1>Manage </h1>
          <RoundButton text="edit store" action={this.openEdit}/>
          <ButtonModal open={this.state.showEditStore} title='Edit Store'>
            Name:<br/>
             <input id="newName" placeholder={sName} type="text" />
             <br/>
             <br/>
           Location:
           <br/>
             <input id="newLocation" placeholder={sLocation} type="text" />
             <br/>
             <br/>
           Image Url:
           <br/>
              <input id="newImg" placeholder={sImg} type="text" />
           <br/><br/>
           <br/><br/>
           <RoundButton className="normal" text="save changes" action={this.saveChanges}/>
          </ButtonModal>
        </div>

        <select onChange={this.changeStore} className="manage-select">
          {storeOptions}
        </select>

        <div className={!this.state.storeLoading ? '' : ' hidden'}>
          <Summary title={sName} subTitle={sLocation} imgUrl={sImg}
                   firstCount={this.state.storeItems.length} firstCountItemName="item" firstCountDesc="in store"
                   secondCount={this.state.checkedOutItems} secondCountItemName="item" secondCountDesc="checked out"/>
        </div>
        <div className={"center-frame" + (this.state.storeLoading ? '' : ' hidden')}>
          <div className="loader"></div>
        </div>
        <div>
          <RoundButton text="add item" action={function(){}}/>
          <RoundButton text="remove item" action={function(){}}/>
        </div>
        <SubHeader title="store items"/>
        <div className={"results-container" + (!this.state.itemLoading ? '' : ' hidden')}>
          {items}
        </div>
        <div className={"center-frame" + (this.state.itemLoading ? '' : ' hidden')}>
          <div className="loader"></div>
        </div>
      </div>
    );
  }
}

export default Manage;
