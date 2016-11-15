/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';
import RoundButton from './round-button.tsx';
import SubHeader from './sub-header.tsx';
import Summary from './summary.tsx';

class Manage extends React.Component<{},{}>{
  render(){
    return(
      <div>
        <div className="view-header">
          <h1>Manage </h1>
          <RoundButton text="edit store" action={function(){}}/>
        </div>
        <Summary title={"store name"} subTitle={"location"} imgUrl={''}
                 firstCount={0} firstCountItemName="item" firstCountDesc="in store"
                 secondCount={0} secondCountItemName="item" secondCountDesc="checked out"/>
        <div>
          <RoundButton text="add item" action={function(){}}/>
          <RoundButton text="remove item" action={function(){}}/>
        </div>
        <SubHeader title="overdue items"/>
        <SubHeader title="checked out items"/>
      </div>
    );
  }
}

export default Manage;
