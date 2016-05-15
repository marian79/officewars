import React, {Component} from 'react';
import Cell from './Cell';

export default class Board extends Component {
    constructor() {
        super();
        this.state = {
            width: 20,
            height: 20
        };
    }
    renderCell(i) {
        return (
            <div key={i} style={{
                width: '20px',
                height: '20px',
                border: '1px solid #c00',
                fontSize: '10px',
                padding: '0px',
                margin: '0px'}}>
                <Cell counter={i} />
            </div>
        );
    }
    renderCells() {
        let cells = [];
        let totalCells = this.state.width * this.state.height;
        for(let i = 0; i < totalCells; i++) {
            cells.push(this.renderCell(i));
        }
        return cells;
    }
    render() {
        const cells = this.renderCells();
        return (
            <div style={{
                width: '460px',
                height: '452px',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {cells}
            </div>
        );
    }
}
