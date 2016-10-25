/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import RoundButton from './round-button.tsx';
import Counter from './counter.tsx';
import { browserHistory } from 'react-router';
import AppSession from './session.tsx';
import SearchPreview from './search-preview.tsx';

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

interface ProfileProps {
  name: string;
  items: any;
}

class Profile extends React.Component<ProfileProps, {}>{
  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      browserHistory.push('/app/signin');
    });
    AppSession.updateUser({});
  }
  render() {
    var profilePicStyle={
        backgroundImage: "url('" + AppSession['user'].getImageUrl() + "?sz=150')"
    }
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
              <Counter count={3} itemName="item" stateDesc="checked out"/>
              <Counter count={1} itemName="item" stateDesc="over due"/>
            </div>
          </div>
        </div>
        <SubHeader title="watched items" />
        <SubHeader title="checked out items" />
      </div>
    )
  }
}

export default Profile;
