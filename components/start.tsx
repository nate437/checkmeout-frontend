/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>
/// <reference path="../typing/react-router.d.ts"/>

//BASE LEVEL IMPORTS
import * as React from 'react';
import * as DOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

//HANDLER IMPORTS
import Search from './search-page.tsx';
import Stores from './store-page.tsx';
import Profile from './profile-page.tsx';

//STYLE IMPORTS
import '../sass/main.scss';

const doc = document.getElementById('app');
declare function require(path: string) : any;

var StoreIcon = require("../images/stores.svg");
var SearchIcon = require("../images/search.svg");
var ProfileIcon = require("../images/profile.svg");

//DEFINE NAV ITEM COMPONENT
interface NavProps {
  icon: string;
  title: string;
}

class NavItem extends React.Component<NavProps, {}>{
  render(){
    var Icon = this.props.icon;
    return(
      <div className="nav-item">
        <Icon/>
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
            <Link to="/app/stores" activeClassName="active"><NavItem title="stores" icon={StoreIcon} /></Link>
            <Link to="/app/search" activeClassName="active"><NavItem title="search" icon={SearchIcon} /></Link>
            <Link to="/app/profile" activeClassName="active"><NavItem title="profile" icon={ProfileIcon}/></Link>
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
    <Route  path="/app/stores" component={Stores}/>
    <Route  path="/app/profile" component={Profile}/>
  </Route>
);

//RENDER APP
DOM.render(<Router history={browserHistory}>{routes}</Router>, doc);
