import React from 'react';

class Button extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementBy);
  };

  render() {
    return (
      <div>
        <button 
          onClick={this.handleClick}>
          {this.props.incrementBy}
        </button>
      </div>
    );
  }
}

export default Button;