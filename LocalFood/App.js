import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/Others/redux/store.js';
import { SignUp } from './src/Screens/SingUp/SignUp.js';

const App = () => {
  return (
    <Provider store={Store}>
      <SignUp />
    </Provider>
  );
};

export default App;