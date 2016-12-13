import React from 'react';
import ReactDOM from 'react-dom';

class SimpleComponent extends React.Component {
	render(){
		return (
			<div>{this.props.message}</div>
		);
	}
}

ReactDOM.render(
	<SimpleComponent message="Hello, World"/>,
	document.querySelector('.js-app')
);