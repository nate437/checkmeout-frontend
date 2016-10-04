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

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="/app/">Home</Link>
        <Link to="/app/search">Search</Link>
      </div>
    );
  }
});

let routes = (
  <Route  path="/app" component={App}>
    <Route  path="/app/search" component={Search}/>
  </Route>
);


DOM.render(<Router history={browserHistory}>{routes}</Router>, doc);
