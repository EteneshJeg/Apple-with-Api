import React, { Component } from 'react'
import Reset from './Reset';

class FromNote extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment(){

    // this.setState({
    //   counter: this.state.counter + 1,
    // }); this updates directly so its not good approach when u have alot of codes so use call back

    this.setState((x) => {
      return {
        counter: x.counter + 1,
      };
    })

  }

  decrement = () => {
      this.setState((myState) => {
        return {
          counter: myState.counter - 1,
        };
      });
  };

  reset = () => {
    this.setState(() => {
      return {
        counter: 0,
      };
    });
  };



  render() {
    return (
      <div>
        <h1>Updating State</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment}>Add 1</button>
        <button onClick={this.decrement}>Minus 1</button>
        <button onClick={this.reset}>reset</button>
        <Reset resetBtn = {this.reset} />
      </div>
    )
  }
}

export default FromNote;
