/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import RoundButton from './round-button.tsx';
import { browserHistory } from 'react-router';
import AppSession from './session.tsx';
import SearchPreview from './search-preview.tsx';
import * as $ from 'jquery';
import SubHeader from './sub-header.tsx';
import Summary from './summary.tsx';

interface ProfileState{
  watchedItems?:SearchPreview[];
  checkedOutItems?:SearchPreview[];
  intervalId?:any;
}

class Profile extends React.Component<{}, ProfileState>{
  constructor(){
    super();
    this.state={
      watchedItems:[],
      checkedOutItems:[]
    };
    this.updateData = this.updateData.bind(this);
  }
  updateData(){
    var parent = this;
    $.ajax({
        type: "GET",
        url: "//api." + window.location.hostname + "/user/checked_out_items",
        dataType: 'json',
        data: {
          id_token: AppSession['token'],
          user_id: AppSession['id']
        },
        success: function(newData){
          parent.setState({watchedItems:[],
          checkedOutItems:newData.items});
        }
    });
  }
  componentDidMount(){
    this.updateData();
    var intervalId = setInterval(this.updateData, 5000);
   // store intervalId in the state so it can be accessed later:
   this.setState({intervalId: intervalId});
 }
 componentWillUnmount() {
   //so we don't get fun memory leaks!
   clearInterval(this.state.intervalId);
}
  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      browserHistory.push('/app/signin');
    });
    //clear out the app session vars
    AppSession.updateUser({},"","");
  }
  render() {

    var profilePicStyle={
        backgroundImage: "url('" + AppSession['user'].getImageUrl() + "?sz=150')"
    }
//TODO: fix implicit ANY types and create a d.ts for all api endpoints.
    var watchedResults = this.state.watchedItems.map(function (item:any) {
       return(
         <SearchPreview key={item.id} imgUrl={item.img_url} itemName={item.name} />
       )
     });

     var checkedOutResults = this.state.checkedOutItems.map(function (item:any) {
        return(
          <SearchPreview key={item.id} imgUrl={item.img_url} itemName={item.name} />
        )
      });

    return(
      <div>
        <div className="view-header">
          <h1>My Profile </h1>
          <RoundButton text="sign out" action={this.signOut}/>
        </div>
        <Summary title={AppSession['user'].getName()} subTitle={AppSession['user'].getEmail()} imgUrl={AppSession['user'].getImageUrl() + "?sz=150"}
                 firstCount={this.state.checkedOutItems.length} firstCountItemName="item" firstCountDesc="checked out"
                 secondCount={0} secondCountItemName="item" secondCountDesc="over due"/>
{/*        <SubHeader title="watched items" />
        <div className="results-container">
          {watchedResults}
        </div>
*/}
        <SubHeader title="checked out items" />
        <div className="results-container">
          {checkedOutResults}
        </div>
      </div>
    )
  }
}

export default Profile;
