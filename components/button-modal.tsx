/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import RoundButton from './round-button.tsx';

import '../sass/button-modal.scss';

interface ButtonModalProps {
  title: string;
  open: boolean;
}

interface ButtonModalState {
  open:boolean;
}

class ButtonModal extends React.Component<ButtonModalProps, ButtonModalState>{
    constructor(props:ButtonModalProps){
      super(props);
      this.state={open: props.open};
      this.close = this.close.bind(this);
    }
    componentWillReceiveProps(newProps:ButtonModalProps){
      if (newProps.open != this.state.open){
        this.setState({open: newProps.open});
      }
    }
    close(){
      this.setState({open: false});
      return;
    }
    render() {
      return(
        <div className={"button-modal " + (this.state.open ? "open" : "")}>
          <div className="veiw-header">
            <div>{this.props.title}</div>
            <RoundButton text="close" action={this.close}/>
          </div>
          {this.props.children}
        </div>
      );
    }
}

export default ButtonModal;
