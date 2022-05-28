import React from 'react';
import logo from './logo.jpg'; 
import { textGenerator } from './textApi';

export class Main extends React.Component {  //основная часть сайта куда должен генериться текст по запросу
  constructor (props) {
    super(props);
    this.state = {
      recipeText: null
    }
  }
  
  async loadRecipe () {
    let recipe = await textGenerator('Fish lasagna recipe');
    console.log(typeof(recipe));
    this.setState({ recipeText: recipe });
  }

  componentDidMount() {
    this.loadRecipe();
  }

  render() {
    
    return (
      <div className='main'>
        <div className='query-result-img'>
          <img src={logo} alt='generated food'/>
        </div> 
        <div className='query-result-text'>
          <p>{!this.state.recipeText ? 'Your recipe is loading!' : this.state.recipeText}</p>
        </div>
      </div>
    )
  }
}
