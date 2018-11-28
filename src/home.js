import React, { Component, lazy, Suspense } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

const Default = () => <p>this home page</p>
const NotFound = () => <div>404</div>
const About = lazy(() => import( /* webpackChunkName: "about" */ './about'))
const Info = lazy(() => import( /* webpackChunkName: "info" */ './info'))

export default class Home extends Component {
	render() {
		return <div>
			<div className="menu">
        <div><Link to="/home">home</Link></div>
        <div><Link to="/list">list</Link></div>
        <div><Link to="/home/info">info</Link></div>
        <div><Link to="/home/about">about</Link></div>
      </div>
      <div className="content">
      	<Suspense fallback={<div>chilren page...</div>}>
		      <Switch>
		      	<Route exact path="/home" component={props => <Default {...props}/>}/>
		      	<Route exact path="/home/about" render={() => <About/>}/>
		      	<Route exact path="/home/info" render={() => <Info/>}/>
          	<Route path="*" component={NotFound}/>
		      </Switch>
	      </Suspense>
      </div>
		</div>
	}
}