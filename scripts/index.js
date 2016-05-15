import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import Desk from './Desk';

ReactDOM.render(
  <Board />,
  document.getElementById('board')
);

ReactDOM.render(
  <Desk />,
  document.getElementById('desk')
);
