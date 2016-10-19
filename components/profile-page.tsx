/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import RoundButton from './round-button.tsx';
import Counter from './counter.tsx';

import '../sass/profile.scss';

interface ProfileProps {
  name: string;
  items: any;
}

class Profile extends React.Component<ProfileProps, {}>{
  render() {
    return(
      <div>
        <div className="profile-header">
          <h1 style={{float: 'left'}}>My Profile </h1>
          <RoundButton style={{float: 'right'}} text="sign out" action={()=>{alert('sign out')}}/>
        </div>
        <div className="profile-summary">
          <div className="profile-pic"></div>
          <div>
            <div className="profile-name">{"FName LName"}</div>
            <div className="profile-email">{"email@domain.com"}</div>
            <div className="profile-counter-cluster">
              <Counter count={3} itemName="item" stateDesc="checked out"/>
              <Counter count={1} itemName="item" stateDesc="over due"/>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Profile;
