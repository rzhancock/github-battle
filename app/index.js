var React = require('react');
var ReactDOM = require('react-dom');
<<<<<<< HEAD
var BattleApp = require('./components/BattleApp');
require('./battle.css');

ReactDOM.render(
	<BattleApp />,
	document.getElementById('gbapp')
=======
require('./index.css');
var App = require('./components/App')

ReactDOM.render(
	<App />,
	document.getElementById('app')
>>>>>>> e3e48e75054997eee6f1d41bd5e1c6f14fb18121
);