/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

import '../sass/counter.scss';

interface CounterProps {
  itemName: string;
  stateDesc: string;
  count: number;
}

class Counter extends React.Component<CounterProps, {}>{
    render() {
      return(
        <div className="counter-container">
          <div className="counter-number">
            {this.props.count}
          </div>
          <div className="counter-descriptor">
            {this.props.itemName + (this.props.count == 1 ? "" : "s") + " " + this.props.stateDesc}
          </div>
        </div>
      );
    }
}

export default Counter;