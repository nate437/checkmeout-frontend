/// <reference path="../typing/react-dom.d.ts"/>
/// <reference path="../typing/react.d.ts"/>
/// <reference path="../typing/react-router.d.ts"/>
/// <reference path="../typing/react-addons-css-transition-group.d.ts" />

//BASE LEVEL IMPORTS
import * as React from 'react';
import * as DOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory, Link} from 'react-router';
import * as TransitionGroup from 'react-addons-css-transition-group';
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
        <Icon></Icon>
        <div>{this.props.title}</div>
      </div>
    );
  }
}

//CREATE NAV BAR
let App = React.createClass({
  getInitialState () {
    return { prevRoute: '', animation: 'page-view-left'}
  },
  componentWillReceiveProps(nextProps:any){
    var path = nextProps.location.pathname;
    var animation = "page-view-left";
    if ((path == "/app/search" && this.state.prevRoute == "/app/profile") || path == "/app/stores"){
      animation = "page-view-right";
    }
    console.log(path + '   ' + this.state.prevRoute);
    this.setState({prevRoute: path, animation: animation});
  },
  render() {
    var path = this.props.location.pathname;
    var segment = path.split('/')[2] || 'root';
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
  <Route key="root" path="/app" component={App}>
    <IndexRedirect to="/app/search"/>
    <Route key="search" path="/app/search" component={Search}/>
    <Route key="stores" path="/app/stores" component={Stores}/>
    <Route key="profile" path="/app/profile" component={Profile}/>
  </Route>
);

//RENDER APP
DOM.render(<Router history={browserHistory}>{routes}</Router>, doc);
