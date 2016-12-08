/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import Counter from './counter.tsx';
import '../sass/profile.scss';

interface SummaryProps{
  imgUrl:string;
  title:string;
  subTitle:string;
  firstCount:number;
  secondCount:number;
  firstCountItemName:string;
  firstCountDesc:string;
  secondCountItemName:string;
  secondCountDesc:string;
}

class Summary extends React.Component<SummaryProps, {}>{
  render(){
    var profilePicStyle={
        backgroundImage: "url('" + this.props.imgUrl + "')"
    }
    return(
      <div className="profile-summary">
        <div style={profilePicStyle} className="profile-pic"></div>
        <div>
          <div className="profile-name">{this.props.title}</div>
          <div className="profile-email">{this.props.subTitle}</div>
          <div className="profile-counter-cluster">
            <Counter count={this.props.firstCount} itemName={this.props.firstCountItemName} stateDesc={this.props.firstCountDesc}/>
            <Counter count={this.props.secondCount} itemName={this.props.secondCountItemName} stateDesc={this.props.secondCountDesc}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Summary;
