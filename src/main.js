import React from 'react';
import logo from './logo.jpg'; 
import { textGenerator } from './textApi';


let recipe = textGenerator('fish food recipe');
console.log(recipe);

export class Main extends React.Component {  //основная часть сайта куда должен генериться текст по запросу
  
  render() {
    
    return (
      <div className='main'>
        <div className='query-result-img'>
          <img src={logo} alt='generated food'/>
        </div> 
        <div className='query-result-text'>
          <p>There should be some generated text here, ideally several paragraphs of it </p>
        </div>
      </div>
    )
  }
}
