/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

import '../sass/round-button.scss';

interface ButtonProps {
  text: string;
  action: ()=>any;
  style?: any;
  className?: string;
}

class RoundButton extends React.Component<ButtonProps, {}>{
    render() {
      return(
        <div className={"round-button " + (!!this.props.className ? this.props.className : "")} style={this.props.style} onClick={this.props.action}>
          {this.props.text}
        </div>
      );
    }
}

export default RoundButton;
