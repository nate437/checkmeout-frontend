/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import RoundButton from './round-button.tsx';
import Counter from './counter.tsx';
import { browserHistory } from 'react-router';
import AppSession from './session.tsx';
import SearchPreview from './search-preview.tsx';
import * as $ from 'jquery';

import '../sass/profile.scss';

interface SubHeadProps {
  title:string;
}

class SubHeader extends React.Component<SubHeadProps,{}>{
  render(){
    return(
      <div>
        <span className="profile-subsection-header">{this.props.title}</span>
        <div className="profile-subsection-divider"></div>
      </div>
    )
  }
}

interface ProfileState{
  watchedItems:SearchPreview[];
  checkedOutItems:SearchPreview[];
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
        <div className="profile-summary">
          <div style={profilePicStyle} className="profile-pic"></div>
          <div>
            <div className="profile-name">{AppSession['user'].getName()}</div>
            <div className="profile-email">{AppSession['user'].getEmail()}</div>
            <div className="profile-counter-cluster">
              <Counter count={this.state.checkedOutItems.length} itemName="item" stateDesc="checked out"/>
              <Counter count={0} itemName="item" stateDesc="over due"/>
            </div>
          </div>
        </div>
        <SubHeader title="watched items" />
        <div className="results-container">
          {watchedResults}
        </div>
        <SubHeader title="checked out items" />
        <div className="results-container">
          {checkedOutResults}
        </div>
      </div>
    )
  }
}

export default Profile;
