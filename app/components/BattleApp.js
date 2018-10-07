var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Battle = require('./Battle');
var Results = require('./Results');


class BattleApp extends React.Component {
	render() {
		return (
			<Router>
			<div className='gb-container'>
				<Nav />
				<Switch>
				<Route exact path='/' component={Battle} />
				<Route path='/results' component={Results} />
				<Route path='/popular' component={Popular} />
				<Route render={function () {
					return <p> Not Found</p>
				}} />
				</Switch>
			</div>
			</Router>
			)
	}
}

module.exports = BattleApp;