var React = require('react');
var ReactDOM = require('react-dom');
import Counter from '../src/components/Counter';
require('./styles/main.scss');

ReactDOM.render(<Counter isActive={false} count={0}/>, document.getElementById('app'));
