import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Navbar from './Component/navbar/navbar';
import HomeComponent from "./Component/Home/HomeComponent";
import React from "react";
import About from './Component/about';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import {Switch , Route } from 'react-router-dom';
import {connect} from "react-redux";
import { IntlProvider } from 'react-intl';
import { fetchGetTarget } from './Store/Actions/TargetActions';

function App(props) {
  return (
    <Router>
    
    <Navbar/>
    <Switch>
    <IntlProvider locale={props.locale} messages={props.Target.Target[props.locale]}>
        <Route exact path='/' component={HomeComponent} />
        <Route  path='/About' component={About} />
        </IntlProvider>
    </Switch>
    </Router> 
  );
}

const MapStateToProps = state => {
  return {
      Target : state.Target,
      locale : state.locale
  };
};
const MapDispatchToProps = dispatch => {
  return {
      onGetTarget: () => dispatch(fetchGetTarget()),
  };
};

export default connect(MapStateToProps , MapDispatchToProps)(App);
