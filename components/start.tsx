/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as DOM from 'react-dom';

import '../sass/main.scss';

const doc = document.getElementById('app');

export interface Props{
  name:string;
};
interface State{
  name:string;
};

export class Hello extends React.Component<Props, State>{
  private getInitialState() {
    return {name: this.props.name};
  }
  public render() {
    return(
        <h1>Hello {this.state.name} </h1>
    )
  }
}

DOM.render(<Hello name="World!"/>, doc);
