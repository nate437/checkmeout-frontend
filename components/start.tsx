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
};

export class Hello extends React.Component<Props, State>{

  public render() {
    return(
        <h1>Hello {this.props.name} </h1>
    )
  }
}

DOM.render(<Hello name="World!"/>, doc);
