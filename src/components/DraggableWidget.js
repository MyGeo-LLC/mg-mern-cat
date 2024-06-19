import './Dashboard.css';

import Draggable from 'react-draggable';
import React from 'react';
import Widget from './Widget';
import { useParams } from 'react-router-dom';

const DraggableWidget = () => {
  const { id } = useParams();

  return (
    <Draggable>
      <div className="draggable-item">
        <Widget id={id} />
      </div>
    </Draggable>
  );
};

export default DraggableWidget;
