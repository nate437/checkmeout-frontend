/// <reference path="../typing/jquery.d.ts"/>
/// <reference path="../typing/react.d.ts"/>
/// <reference path="../typing/gapi.auth2.d.ts"/>

import * as React from 'react';
import * as $ from 'jquery';
import { browserHistory } from 'react-router';
import AppSession from './session.tsx'

import '../sass/signin.scss';

class Signin extends React.Component<{},{}>{

  private onSignIn(googleUser:any) {
      AppSession.updateUser(googleUser.getBasicProfile()); // plus any other logic here
      browserHistory.push('/app/a');
  }

  componentDidMount() {
    // execute any gapi calls here...
    gapi.signin2.render('g-signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 200,
      'height': 50,
      'longtitle': true,
      'theme': 'light',
      'onsuccess': this.onSignIn
    });
  }

  render(){
    return(
      <div style={{backgroundImage: "url('../images/background.svg')"}} className="signin-bg">
        <img className="signin-logo" src="../images/logo.svg"/>
        <div className="signin-desc">Check Me Out is an easy-to-use, internet conntected self-checkout system designed for resource tracking.</div>
        <div id="g-signin2" ></div>
      </div>
    );
  }
}

export default Signin;