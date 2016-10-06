/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>
/// <reference path="../typing/react-router.d.ts"/>

//BASE LEVEL IMPORTS
import * as React from 'react';
import * as DOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

//HANDLER IMPORTS
import Search from './search-page.tsx';

//STYLE IMPORTS
import '../sass/main.scss';

const doc = document.getElementById('app');
declare function require(path: string) : any;

//DEFINE NAV ITEM COMPONENT
interface NavProps {
  icon: string;
  title: string;
}
class NavItem extends React.Component<NavProps, {}>{
  render(){
    return(
      <div className="nav-item">
        <span dangerouslySetInnerHTML={{__html: this.props.icon}} />
        <div>{this.props.title}</div>
      </div>
    );
  }
}

//CREATE NAV BAR
let App = React.createClass({
  render() {
    return (
      <div className="app-container">
        <div className="nav">
          <div className="nav-item-container">
            <Link to="/app/stores" activeClassName="active"><NavItem title="stores" icon="" /></Link>
            <Link to="/app/search" activeClassName="active"><NavItem title="search" icon="" /></Link>
            <Link to="/app/profile" activeClassName="active"><NavItem title="profile" icon="" /></Link>
          </div>
        </div>
        <div className="app-content-container">
          {this.props.children}
        </div>
      </div>

    );
  }
});

//DEFINE ROUTES
let routes = (
  <Route  path="/app" component={App}>
    <Route  path="/app/search" component={Search}/>
    <Route  path="/app/stores" component={Search}/>
    <Route  path="/app/profile" component={Search}/>
  </Route>
);

//RENDER APP
DOM.render(<Router history={browserHistory}>{routes}</Router>, doc);
