import React, {Component} from 'react';
import Draggable from 'react-draggable';
import Developer from './Developer';

export default class Desk extends Component {
    constructor() {
        super();
        this.state = {
            type: 'single',
            developers: [],
            activeDrags: 0,
            deltaPosition: {
                x: 0, y: 0
            },
            controlledPosition: {
                x: -400, y: 200
            }
        };
        console.log(Developer);
    }
    handleDrag(e, ui) {
      const {x, y} = this.state.deltaPosition;
      this.setState({
        deltaPosition: {
          x: x + ui.deltaX,
          y: y + ui.deltaY
        }
      });
    }

    onStart() {
      //this.state.activeDrags++;
    }

    onStop() {
      //this.state.activeDrags--;
    }

    // For controlled component
    adjustXPos(e) {
      e.preventDefault();
      e.stopPropagation();
      const {x, y} = this.state.controlledPosition;
      this.setState({controlledPosition: {x: x - 10, y}});
    }

    adjustYPos(e) {
      e.preventDefault();
      e.stopPropagation();
      const {controlledPosition} = this.state;
      const {x, y} = this.state.controlledPosition;
      this.setState({controlledPosition: {x, y: y - 10}});
    }

    onControlledDrag(e, position) {
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    }

    onControlledDragStop(e, position) {
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    }
    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        console.log(dragHandlers, {...dragHandlers});
        console.log(this);
        return (
          <div>
            <p>Active DragHandlers: {this.state.activeDrags}</p>
            <Draggable zIndex={100} {...dragHandlers}>
              <div className="box">Desk</div>
            </Draggable>
          </div>
        );
    }
}
