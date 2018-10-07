var React = require('react');
var NavLink= require('react-router-dom').NavLink;

function Nav () {
	return (
<<<<<<< HEAD
		<ul className='gb-nav'>
=======
		<ul className='nav'>
>>>>>>> e3e48e75054997eee6f1d41bd5e1c6f14fb18121
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