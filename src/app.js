var React = require('react');
var ReactDOM = require('react-dom');
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import Counter from '../src/components/counter';
//import reducers from '<project-path>/reducers';
require('./styles/main.scss');

//ReactDOM.render(<Counter isActive={false} count={0}/>, document.getElementById('app'));

// TODO: remove this next line. We should import all reducers instead (once we have any)
const reducers = {};

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));
const store = createStore(reducer);
const history = createHistory();

// TODO: We should not have this here. It should be on a separate file
const App = React.createClass({
	render() {
		return <Counter isActive={false} count={0}/>;
	}
})

ReactDOM.render(
	<Provider store={store}>
  		<Router history={history}>
    		<Route path="/" component={App} />
    		<Route path="/counter" component={Counter} />
	  	</Router>
  	</Provider>,
	document.getElementById('app')
)
