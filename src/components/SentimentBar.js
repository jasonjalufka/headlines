import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';

class SentimentBar extends React.Component {

    render() {
        let percentage = Math.floor((this.props.sentiment) * 100);
        return (
            <div>
                Positivity: {percentage}%
                <Line percent={percentage} strokeWidth="4" trailWidth="4" strokeLinecap="round" strokeColor={ percentage >= 50 ? "#2ECC71" : "#D64541" } />
            </div>
        )
    }
}

export default SentimentBar;