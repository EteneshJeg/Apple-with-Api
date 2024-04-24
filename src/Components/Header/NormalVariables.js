import React, { Component } from "react";

function ReactEvent() {
  alert("hey mearey you clicked me!");
}
class NormalVariables extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "Etenesh",
      bootCamp: "Evangadi",
      group: 1,
      batch21: props.batch
    };
    // this.ReactEvent = this.ReactEvent.bind(this)

  }



  ReactEvent() {
    alert("hey konjit you clicked me!");
    // console.log(this.state.bootCamp);
  }

  render() {
    let x = 100;
    const increment = () => {
      x = x + 1;

      console.log(x);
      return x;
    };
    return (
      <div>
        <h1>Using Normal variable won't work in React as states</h1>
        <h2>
          {x}
        </h2>
        <h1>
          {this.state.name}
        </h1>
        <h1>
          {this.state.group}
        </h1>
        <h1>
          {this.props.batch}
        </h1>
        <h1>
          {this.state.batch21}
        </h1>
        <button onClick={ReactEvent}>click mearey</button>
        <button onClick={this.ReactEvent}>click Konjit</button>
        <h1>
          school name:{this.state.bootCamp}
        </h1>
        <button onClick={increment}>Add 1</button>
      </div>
    );
  }
}

export default NormalVariables;
