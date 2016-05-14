import React, {Component} from 'react';

export default class Cell extends Component {
    render() {
        return (
            <div style={{
                width: '20px',
                height: '20px',
                border: '1px solid #fff'
            }}>{this.props.counter}</div>
        );
    }
}
