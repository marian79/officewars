import React, { Component } from 'react';
import Developer from './Developer';

export default class Desk extends Component {
    constructor() {
        super();
        this.state = {
            type: 'single',
            developers: []
        }
    }
    render() {
        return (<div></div>)
    }
}
