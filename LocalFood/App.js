import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/Others/redux/store.js';
import { TestScreen } from './src/Screens/TestScreen.js';

const App = () => {
  return (
    <Provider store={Store}>
      <TestScreen />
    </Provider>
  );
};

export default App;