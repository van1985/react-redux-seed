var React = require('react');
var ReactDOM = require('react-dom');
import Counter from '../src/components/Counter';


//ReactDOM.render(<Counter />, document.getElementById('app'));

ReactDOM.render(<Counter isActive={false} />, document.getElementById('app'));
