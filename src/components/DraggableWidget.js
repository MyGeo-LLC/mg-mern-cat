import './DraggableWidget.css';

import { Card, CardContent, IconButton } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import React, { useState } from 'react';

const DraggableWidget = ({ id, title, children }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleToggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Card className="draggable-widget">
      <CardContent>
        <div className="widget-header">
          <h4>{title}</h4>
          <IconButton onClick={handleToggleMinimize}>
            {isMinimized ? <ExpandMore /> : <ExpandLess />}
          </IconButton>
        </div>
        {!isMinimized && (
          <div className="widget-content">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DraggableWidget;
