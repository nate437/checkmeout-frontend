/// <reference path="../typing/jquery.d.ts"/>
/// <reference path="../typing/react.d.ts"/>
/// <reference path="../typing/gapi.auth2.d.ts"/>

import * as React from 'react';
import * as $ from 'jquery';
import { browserHistory } from 'react-router';
import AppSession from './session.tsx';

import '../sass/signin.scss';

class Signin extends React.Component<{},{}>{

  private onSignIn(googleUser:any) {
    $.ajax({
        type: "GET",
        url: "//api." + window.location.hostname + "/login",
        data: {
          id_token: googleUser.getAuthResponse().id_token,
          email: googleUser.getBasicProfile().getEmail()
        },
        success: function(data){
          AppSession.updateUser(googleUser.getBasicProfile(), googleUser.getAuthResponse().id_token, data.data.user_id);
          browserHistory.push('/app/a');
        }
    });

  }

  componentDidMount() {
    // execute any gapi calls here...
    gapi.signin2.render('g-signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 235,
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
        <div className="signin-desc">Check Me Out is an easy-to-use, internet connected self-checkout system designed for resource tracking.</div>
        <div id="g-signin2" ></div>
      </div>
    );
  }
}

export default Signin;
