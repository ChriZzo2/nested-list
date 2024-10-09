import React from 'react';
import {List, ListProvider} from './components';

const App: React.FC = () => {
  return (
      <ListProvider>
        <List />
      </ListProvider>
  );
};

export default App;