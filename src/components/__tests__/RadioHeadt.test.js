// src/components/__tests__/RadioHead.test.js

import { fireEvent, render } from '@testing-library/react';

import { Provider } from 'react-redux';
import RadioHead from '../RadioHead';
import React from 'react';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('RadioHead Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      radioHeads: [
        { id: '1', incomingVolume: 50, outgoingVolume: 50, masterVolume: 50, isMuted: false },
      ],
    });

    component = render(
      <Provider store={store}>
        <RadioHead id="1" />
      </Provider>
    );
  });

  test('should render RadioHead component', () => {
    expect(component.getByText('RadioHead 1')).toBeInTheDocument();
  });

  test('should toggle mute status', () => {
    const muteButton = component.getByText('Mute');
    fireEvent.click(muteButton);
    expect(store.getActions()).toEqual([{ type: 'radioHeads/toggleMute', payload: '1' }]);
  });

  // Add more tests as needed
});
