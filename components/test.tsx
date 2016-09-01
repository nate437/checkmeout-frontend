/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import * as DOM from 'react-dom';
const doc = document.getElementById('app');


export interface Props{ };
interface State{ };

export class Car extends React.Component<Props, State>{
  public render() {
    return(
      <h1>Hello World! </h1>
    )
  }
}

export class Truck extends React.Component<Props, State>{
  public render() {
    return(
      <h1>Hello World! </h1>
    )
  }
}

DOM.render(<div>test</div>, doc);
