var React = require('react');
var PropTypes = require('prop-types');


function PlayerPreview(props) {
	return (
		<div>
<<<<<<< HEAD
			<div className='gb-column'>
=======
			<div className='column'>
>>>>>>> e3e48e75054997eee6f1d41bd5e1c6f14fb18121
				<img 
					className='avatar'
					src={props.avatar}
					alt={'Avatar for ' + props.username}
					/>
					<h2 className='username'>@{props.username}</h2>
			</div>
			{props.children}
		</div>
	)
}

PlayerPreview.propTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
}

module.exports = PlayerPreview;