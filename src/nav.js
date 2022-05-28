import React from 'react';
import logo from './logo.jpg'; 
import { Button } from './button';


export class Nav extends React.Component { //простенький хэдер с кнопкой генерации и инпутом. Да, на них пока нет листенеров и прочих пропсов
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick () {
    console.log('click!');
    
    // this.setState({ recipeText: null });
    // console.log(this.state.recipeText);
    // let recipe = await textGenerator(document.getElementById('user-input').value + ' food recipe');
    // console.log(recipe);
    // this.setState( {recipeText: recipe} );
    // console.log(this.state.recipeText);
  }

  componentDidMount () {
    
  }



  render() {  
       
    return (
      <div className='header'>
        <nav className='inner-header'>
          <div className='nav-item'>
            <img src={logo} alt='generated food'></img>
          </div>
          <div className='nav-item'>
            <p>Create your own recipe!</p>
          </div>
          <div className='nav-item'> 
            <input type='text' id='user-input' placeholder='type your desired food recipe here!'></input>
          </div>
          <div className='nav-item'> 
            <Button onClick={this.handleClick}/>
          </div>
        </nav>
      </div>
    )
  }
}
