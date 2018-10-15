var React = require('react');
var NavLink= require('react-router-dom').NavLink;

function Nav () {

	function goBack(e){
		e.preventDefault();
		return false;
	}

	return (
		<ul className='gb-nav'>
			<li>
				<NavLink exact activeClassName='active' to='/github-battle/'>
					Battle
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' to='/github-battle/popular'>
					Popular
				</NavLink>
			</li>
		</ul>
	)
}

module.exports = Nav;