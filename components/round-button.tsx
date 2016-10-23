/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

import '../sass/round-button.scss';

interface ButtonProps {
  text: string;
  action: ()=>any;
  style?: any;
}

class RoundButton extends React.Component<ButtonProps, {}>{
    render() {
      return(
        <div style={this.props.style} onClick={this.props.action} className="round-button">
          {this.props.text}
        </div>
      );
    }
}

export default RoundButton;