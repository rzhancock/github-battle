var React = require('react');
var Link = require('react-router-dom').Link;
var FontAwesome = require('react-fontawesome');
var PropTypes = require ('prop-types');

class Home extends React.Component {
	render() {
		return (
			<div className='home-container'>
				<div className='sub-container'>
				<h1 className='home-title'>GitHub
					<FontAwesome
					className='home-title'
	        name='github'
	        style={{ display: 'inline', color: '#3b3b3b'}}
	      	/></h1><h1 className='home-title'>Battle</h1>
	      	</div>
				<h2 className='home-subtitle'> See how you stack up against other GitHub users!</h2>
			</div>
		)
	}
}

module.exports = Home;