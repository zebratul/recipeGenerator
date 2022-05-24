import React from 'react';
import { Nav } from './nav';
import { Main } from './main';

class App extends React.Component { //общая хрень со всеми элементами 
  render() {
    return (
    <div id='page'>
      <Nav />
      <Main />
    </div>
  )}
}

export default App;
