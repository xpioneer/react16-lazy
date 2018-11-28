import React, { Component, lazy, Suspense } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const Home = lazy(() => import('./home'))
const List = lazy(() => import('./list'))
const $404 = () => <div>404</div>

export default class App extends Component {
  
  render() {

    return <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path='/' component={props => <Home {...props}/>}/>
          <Route exact path='/list' component={props => <List {...props}/>}/>
          <Route component={$404}/>
        </Switch>
      </Suspense>
    </Router>
  }
}

// const App = <Router>
//   <Suspense fallback={<div>loading...</div>}>
//     <Switch>
//       <Route path='/' component={Home}/>
//       <Route path='/list' component={List}/>
//     </Switch>
//   </Suspense>
// </Router>
