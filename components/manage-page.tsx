/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import RoundButton from './round-button.tsx';
import SubHeader from './sub-header.tsx';
import Summary from './summary.tsx';
import ButtonModal from './button-modal.tsx';

interface ManageState {
  showEditStore: boolean;
}

class Manage extends React.Component<{},ManageState>{
  constructor(){
    super();
    this.state = {
      showEditStore: false
    }
    this.openEdit = this.openEdit.bind(this);
  }
  openEdit(){
    this.setState({showEditStore: true});
  }
  saveChanges(){

  }
  render(){
    return(
      <div>
        <div className="view-header">
          <h1>Manage </h1>
          <RoundButton text="edit store" action={this.openEdit}/>
          <ButtonModal open={this.state.showEditStore} title='Edit Store'>
            Name:<br/>
             <input placeholder="Name of store" type="text"/>
             <br/>
             <br/>
           Location:
           <br/>
             <input placeholder="Address of store" type="text"/>
             <br/>
             <br/>
           Image Url:
           <br/>
              <input placeholder="Store Image" type="text"/>
           <br/><br/>
           <br/><br/>
           <RoundButton className="normal" text="save changes" action={this.saveChanges}/>
          </ButtonModal>
        </div>
        <Summary title={"store name"} subTitle={"location"} imgUrl={''}
                 firstCount={0} firstCountItemName="item" firstCountDesc="in store"
                 secondCount={0} secondCountItemName="item" secondCountDesc="checked out"/>
        <div>
          <RoundButton text="add item" action={function(){}}/>
          <RoundButton text="remove item" action={function(){}}/>
        </div>
        <SubHeader title="overdue items"/>
        <SubHeader title="checked out items"/>
      </div>
    );
  }
}

export default Manage;
