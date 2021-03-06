var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
var PlayerPreview = require('./PlayerPreview');
var Home = require('./Home');

function PlayerPreview(props) {
	return (
		<div>
			<div className='gb-column'>
				<img 
					className='avatar'
					src={props.avatar}
					alt={'Avatar for ' + props.username} 
				/>
				<h2 className='username'>@{props.username}</h2>
			</div>
			<button
				className='reset'
				onClick={props.onReset.bind(null, props.id)}>
					Reset
			 </button>
		</div>
	)
}

PlayerPreview.propTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
}

class PlayerInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}
	handleChange(event) {
		var value = event.target.value;

		this.setState(function() {
			return {
				username: value
			}
		})
	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.onSubmit(
			this.props.id,
			this.state.username
			)
	}

	render() {
		return (
			<form className='gb-column' onSubmit={this.handleSubmit}>
				<label className='gb-header' htmlFor='username'>
					Player <strong>{this.props.label}</strong>
				</label>
					<input
						id='username'
						placeholder='GitHub username'
						type='text'
						autoComplete='off'
						value={this.state.username}
						onChange={this.handleChange}
						/>
					<button
						className='gb-button'
						type='submit'
						disabled={!this.state.username}>
							Submit
					</button>
			</form>
		)
	}
}

PlayerInput.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
}

PlayerInput.defaultProps = {
		label: 'username',
}

class Battle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			playerOneName: '',
			playerTwoName: '',
			playerOneImage: null,
			playerTwoImage: null,
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}
	handleSubmit(id, username) {
		this.setState(function(){
			var newState = {};
			newState[id + 'Name'] = username;
			newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
			return newState;
		})
	}

	handleReset(id) {
		this.setState(function() {
			var newState = {};
			newState[id+ 'Name'] = '';
			newState[id + 'Image'] = null;
			return newState;
		})
	}
	render() {
		var match = this.props.match;
		var playerOneName = this.state.playerOneName;
		var playerTwoName = this.state.playerTwoName;
		var playerOneImage = this.state.playerOneImage;
		var playerTwoImage = this.state.playerTwoImage;

		return (
			<div>
				<div className='gb-row'>
					<Home />
				</div>
				<div className='gb-row'>
					{!playerOneName &&
						<PlayerInput 
							id='playerOne'
							label='One'
							onSubmit={this.handleSubmit}/>}

					{playerOneImage !== null &&
						<PlayerPreview
							avatar={playerOneImage}
							username={playerOneName}
						>
						<button
							className='reset'
							onClick={this.handleReset.bind(null, 'playerOne')}>
								Reset
						</button>
						</PlayerPreview>}

					{!playerTwoName &&
						<PlayerInput 
							id='playerTwo'
							label='Two'
							onSubmit={this.handleSubmit}/>}

					{playerTwoImage !== null &&
						<PlayerPreview
							avatar={playerTwoImage}
							username={playerTwoName}
						>
							<button
								className='reset'
								onClick={this.handleReset.bind(null, 'playerTwo')}>
								Reset
							</button>
						</PlayerPreview>}
				</div>

				{playerOneImage && playerTwoImage &&
					<Link
						className='gb-button'
						to={{
							pathname: '/github-battle/results',
							search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
						}}>
							Battle
					</Link>}
			</div>
		)
	}
}

module.exports = Battle;