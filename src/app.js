import React, { Component, lazy, Suspense } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


const Home = lazy(() => import( /* webpackChunkName: "home" */ './home'))
const List = lazy(() => import( /* webpackChunkName: "list" */ './list'))

export default class App extends Component {
  
  render() {

    return <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path='/home' component={props => <Home {...props}/>}/>
          <Route exact path='/list' render={() => <List/>}/>
          <Redirect to="/home"></Redirect>
        </Switch>
      </Suspense>
    </Router>
  }
}
