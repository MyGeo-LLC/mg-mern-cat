import { Card, CardContent, Typography } from '@mui/material';

import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  detailsWidget: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
  },
}));

const DetailsWidget = ({ radioHead }) => {
  const classes = useStyles();
  return (
    <Card className={classes.detailsWidget}>
      <CardContent>
        <Typography variant="h6">Details</Typography>
        <Typography variant="body1">Name: {radioHead.name}</Typography>
        <Typography variant="body1">Status: {radioHead.status}</Typography>
        <Typography variant="body1">File: {radioHead.fileName}</Typography>
      </CardContent>
    </Card>
  );
};

export default DetailsWidget;
