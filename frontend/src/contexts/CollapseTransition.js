import { Collapse } from '@mui/material';
import React from 'react';

const CollapseTransition = React.forwardRef(function Transition(props, ref) {
  return <Collapse ref={ref} {...props} />;
});

export default CollapseTransition;
