import React from 'react';
import Result from './components/functions/Result';
import Button from './components/classes/Button';

class App extends React.Component {
  state = {counter: 0};

  incrementCounter = (incrementBy) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementBy
    }));
  };

  render() {
    return (
      <div>
        <Button incrementBy={1} onClickFunction={this.incrementCounter}/>
        <Button incrementBy={5} onClickFunction={this.incrementCounter}/>
        <Button incrementBy={10} onClickFunction={this.incrementCounter}/>
        <Button incrementBy={15} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
