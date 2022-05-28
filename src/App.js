import React from 'react';
import { Nav } from './nav';
import { Main } from './main';

class App extends React.Component { //общая хрень со всеми элементами 

  // constructor(props) {
  //   super(props);
  
  // }
  
  // handleClick () {
  //   console.log('click!');
  //   console.log(this.state.recipeText);
    
  //   this.setState({ recipeText: null });
  //   console.log(this.state.recipeText);
  //   let recipe = await textGenerator(document.getElementById('user-input').value + ' food recipe');
  //   console.log(recipe);
  //   this.setState( {recipeText: recipe} );
  //   console.log(this.state.recipeText);
  // }

  render() {
    return (
    <div id='page'>
      <Nav />
      <Main />
    </div>
  )}
}

export default App;
