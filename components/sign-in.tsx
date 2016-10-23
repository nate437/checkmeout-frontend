/// <reference path="../typing/jquery.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as $ from 'jquery';

import '../sass/signin.scss';

interface SigninProps {

}

class Signin extends React.Component<SigninProps,{}>{
  render(){
    return(
      <div style={{backgroundImage: "url('../images/background.svg')"}} className="signin-bg">
        <img className="signin-logo" src="../images/logo.svg"/>
        <div className="signin-desc">Check Me Out is an easy-to-use, internet conntected self-checkout system designed for resource tracking.</div>
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
      </div>
    );
  }
}

export default Signin;
