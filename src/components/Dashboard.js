import React from 'react';
import GridLayout from 'react-grid-layout';
import RadioHead from './RadioHead';
import { useSelector } from 'react-redux';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const Dashboard = () => {
  const radioHeads = useSelector(state => state.radioHeads);

  const layout = radioHeads.map((head, index) => ({
    i: head.id,
    x: (index % 6) * 2,
    y: Math.floor(index / 6) * 2,
    w: 2,
    h: 2,
    isResizable: true,
    isDraggable: true,
  }));

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        {radioHeads.map(head => (
          <div key={head.id}>
            <RadioHead {...head} />
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default Dashboard;
