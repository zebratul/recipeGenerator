import React from 'react';

export class Button extends React.Component { //кнопка. просто кнопка

  render() {  
    return (
      <button onClick={this.props.onClick}>Click me!</button>
    )
  }
}
