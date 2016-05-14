import React, { Component } from 'react';
import Developer from './Developer';

export default class Team extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            avatar: '',
            developers: [],
            points: 0
        }
    }
    render() {
        return (<span></span>)
    }
}
