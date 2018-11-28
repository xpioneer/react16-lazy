import React, { Component, lazy, Suspense } from 'react'
import { Switch, Route, Link } from 'react-router-dom'


const About = lazy(() => import('./about'))
const Info = lazy(() => import('./info'))

export default class Home extends Component {
	render() {
		return <div>
			<p>this home page</p>
			<div>
        <div><Link to="/">home</Link></div>
        <div><Link to="/list">list</Link></div>
        <div><Link to="/info">info</Link></div>
        <div><Link to="/about">about</Link></div>
      </div>
      <Suspense fallback={<div>chilren page...</div>}>
	      <Switch>
	      	<Route exact path="/about" component={props => <About {...props}/>}/>
	      	<Route exact path="/info" component={props => <Info {...props}/>}/>
	      </Switch>
      </Suspense>
		</div>
	}
}