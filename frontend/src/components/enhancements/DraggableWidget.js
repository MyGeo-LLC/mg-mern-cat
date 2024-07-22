import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';

const DraggableWidget = ({ children, id }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleDragStart = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.x,
      y: e.clientY - rect.y,
    });
  };

  const handleDrag = (e) => {
    if (e.clientX === 0 && e.clientY === 0) return;
    setPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  return (
    <Box
      ref={ref}
      sx={{ position: 'absolute', left: position.x, top: position.y }}
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      id={id}
    >
      {children}
    </Box>
  );
};

export default DraggableWidget;
