/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>
/// <reference path="../typing/react-router.d.ts"/>
/// <reference path="../typing/react-addons-css-transition-group.d.ts" />
/// <reference path="../typing/gapi.auth2.d.ts"/>

//BASE LEVEL IMPORTS
import * as React from 'react';
import * as DOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory, Link} from 'react-router';
import * as TransitionGroup from 'react-addons-css-transition-group';
//HANDLER IMPORTS
import Search from './search-page.tsx';
import Stores from './store-page.tsx';
import Profile from './profile-page.tsx';
import Signin from './sign-in.tsx';
import AppSession from './session.tsx';

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

//CREATE BASE APP
let BaseApp = React.createClass({
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
})

//CREATE NAV BAR
let App = React.createClass({
  getInitialState () {
    return { prevRoute: '/app/a/profile', animation: 'page-view-left'}
  },
  componentWillReceiveProps(nextProps:any){
    var path = nextProps.location.pathname;
    var animation = "page-view-left";
    if ((path == "/app/a/search" && this.state.prevRoute == "/app/a/profile") || path == "/app/a/stores"){
      animation = "page-view-right";
    }
    this.setState({prevRoute: path, animation: animation});
  },
  render() {
    var path = this.props.location.pathname;
    var segment = path.split('/')[2] || 'root';
    return (
      <div className="app-container">
        <div className="nav">
          <div className="nav-item-container">
            <Link to="/app/a/stores" activeClassName="active"><NavItem title="stores" icon={StoreIcon} /></Link>
            <Link to="/app/a/search" activeClassName="active"><NavItem title="search" icon={SearchIcon} /></Link>
            <Link to="/app/a/profile" activeClassName="active"><NavItem title="profile" icon={ProfileIcon}/></Link>
          </div>
        </div>
        <div className="app-content-container">
          <TransitionGroup
            transitionName={this.state.animation}
            transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children, { key: path })}
          </TransitionGroup>
        </div>
      </div>
    );
  }
});

//DEFINE ROUTES
let routes = (
  <Route key="singin" path="/app" component={BaseApp}>
    <IndexRedirect to="/app/signin"/>
    <Route key="singin" path="/app/signin" component={Signin}/>
    <Route key="root" path="/app/a" component={App}>
      <IndexRedirect to="/app/a/profile"/>
      <Route key="search" path="/app/a/search" component={Search}/>
      <Route key="stores" path="/app/a/stores" component={Stores}/>
      <Route key="profile" path="/app/a/profile" component={Profile}/>
    </Route>
  </Route>
);

//RENDER APP
DOM.render(<Router history={browserHistory}>{routes}</Router>, doc);
