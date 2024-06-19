import './DetailsWidget.css';

import { Card, CardContent, Typography } from '@material-ui/core';

// src/components/DetailsWidget.js
import React from 'react';

const DetailsWidget = ({ radioHead }) => (
  <Card className="details-widget">
    <CardContent>
      <Typography variant="h6">Details</Typography>
      <Typography variant="body1">Name: {radioHead.name}</Typography>
      <Typography variant="body1">Status: {radioHead.status}</Typography>
      <Typography variant="body1">File: {radioHead.fileName}</Typography>
    </CardContent>
  </Card>
);

export default DetailsWidget;
