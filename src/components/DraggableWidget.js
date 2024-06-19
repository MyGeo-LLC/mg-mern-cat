import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import React, { useState } from 'react';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  draggableWidget: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    margin: '16px 0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'grab',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
  },
  widgetHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  widgetContent: {
    paddingTop: '10px',
  },
}));

const DraggableWidget = ({ id, title, children }) => {
  const classes = useStyles();
  const [isMinimized, setIsMinimized] = useState(false);

  const handleToggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Card className={classes.draggableWidget} draggable>
      <CardContent>
        <div className={classes.widgetHeader}>
          <Typography variant="h6">{title}</Typography>
          <IconButton onClick={handleToggleMinimize}>
            {isMinimized ? <ExpandMore /> : <ExpandLess />}
          </IconButton>
        </div>
        {!isMinimized && (
          <div className={classes.widgetContent}>
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DraggableWidget;
