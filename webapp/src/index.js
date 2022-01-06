import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavigationBar from './NavigationBar';
import TableClass from './TableClass'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Empty from './Empty';
import userApi from './api/userApi';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={TableClass} />
        <Route exact path='/create' component={TableClass} />
        <Route exact path='/viewdata' component={userApi} />
        <Route exact path='/updatedata' component={Empty} />
      </Switch>
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
