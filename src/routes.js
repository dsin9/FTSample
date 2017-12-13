import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {withRouter} from 'react-router'
import SearchBar from './components/search/search_bar';
import FtrLanding from "./components/release_orders/ftrLanding";
import BasketList from "./components/release_orders/basket_list";
import SubmissionsList from "./components/release_orders/submissions_list";
import SearchFilter from "./components/release_orders/searchFilter";
import SecuritySearch from './components/release_orders/security_search';
import App from './App'
import Main from './Main'

export default (props) => (
  <Router>
    <Main>
      <Switch>
      <Route path='/securitiesSearch' exact component={SecuritySearch} />
        <App >
            <Switch>
              <Route exact path='/app' component={FtrLanding} />
              <Route path='/app/releaseOrder' exact component={BasketList} />
              <Route path='/app/trackSubmission' exact component={SubmissionsList} />
              <Route path='/app/filter' component={SearchFilter} />
            </Switch>
        </App>
        
      </Switch>
    </Main>
  </Router>
)