import React from 'react';

class ClearButton extends React.Component {
	constructor(){
		super();
		this.state = {
			isClearDisabled: false
		};
	}

	handleClearMessages(){
		this.props.clearMessages();
		this.setState({
			isClearDisabled: true
		});
	}

	render(){
		let button = <button onClick={this.handleClearMessages.bind(this)}>Clear</button>;
		if (this.state.isClearDisabled){
			button = <button disabled="disabled">Clear</button>;
		}

		return <div>{button}</div>;
	}
}

export default ClearButton;