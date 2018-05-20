import React, { Component } from 'react';
import SentimentBar from './SentimentBar';

class Analyze extends Component {
	render() {
		return(
			<div>
				<SentimentBar sentiment={this.props.sentiment} />
			</div>
		)
	}
}

export default Analyze;