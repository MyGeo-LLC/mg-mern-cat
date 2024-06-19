import './Dashboard.css';

import Draggable from 'react-draggable';
import RadioHead from './RadioHead';
import React from 'react';
import { useParams } from 'react-router-dom';

const DraggableRadioHead = () => {
  const { id } = useParams();

  return (
    <Draggable>
      <div className="draggable-item">
        <RadioHead id={id} />
      </div>
    </Draggable>
  );
};

export default DraggableRadioHead;

