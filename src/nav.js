import React from 'react';
import logo from './logo.jpg'; 

export class Nav extends React.Component { //простенький хэдер с кнопкой генерации и инпутом. Да, на них пока нет листенеров и прочих пропсов
  
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
            <button>Click me!</button>
          </div>
        </nav>
      </div>
    )
  }
}
