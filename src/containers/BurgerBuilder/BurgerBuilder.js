import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";

class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Aux>
        <div>Burger</div>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
