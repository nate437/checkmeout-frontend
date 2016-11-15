/// <reference path="../typing/react.d.ts"/>

import * as React from 'react';

import '../sass/sub-header.scss';

interface SubHeadProps {
  title:string;
}

class SubHeader extends React.Component<SubHeadProps,{}>{
  render(){
    return(
      <div>
        <span className="subsection-header">{this.props.title}</span>
        <div className="subsection-divider"></div>
      </div>
    )
  }
}

export default SubHeader;
