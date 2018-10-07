var React = require('react');
var ReactDOM = require('react-dom');
var BattleApp = require('./components/BattleApp');
require('./battle.css');

ReactDOM.render(
	<BattleApp />,
	document.getElementById('gbapp')
);