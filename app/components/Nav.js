var React = require('react');
var NavLink= require('react-router-dom').NavLink;

function Nav () {
	return (
		<ul className='gb-nav'>
			<li>
				<NavLink exact activeClassName='active' to='/'>
					Battle
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' to='/popular'>
					Popular
				</NavLink>
			</li>
		</ul>
	)
}

module.exports = Nav;