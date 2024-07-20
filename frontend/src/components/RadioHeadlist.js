import React, { useEffect, useState } from 'react';
import { fetchRadioHeads } from '../api';

const RadioheadList = () => {
  const [radioHeads, setRadioHeads] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRadioHeads = async () => {
      try {
        const response = await fetchRadioHeads();
        setRadioHeads(response.data);
      } catch (error) {
        setError('Failed to fetch radio heads');
      }
    };

    getRadioHeads();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Radioheads</h1>
      <ul>
        {radioHeads.map((radioHead) => (
          <li key={radioHead.id}>{radioHead.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RadioheadList;
