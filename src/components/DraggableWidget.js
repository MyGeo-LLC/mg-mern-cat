import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  draggableWidget: {
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
        <div className={classes.header}>
          <Typography variant="h6">{title}</Typography>
          <IconButton onClick={handleToggleMinimize}>
            {isMinimized ? <ExpandMoreIcon style={{ color: '#ffffff' }} /> : <ExpandLessIcon style={{ color: '#ffffff' }} />}
          </IconButton>
        </div>
        {!isMinimized && <div>{children}</div>}
      </CardContent>
    </Card>
  );
};

export default DraggableWidget;
