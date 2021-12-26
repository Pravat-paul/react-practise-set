import React from "react";

class ToggleButton extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggle: true,
    };
    this.toggleButtonHandler = this.toggleButtonHandler.bind(this);
  }

  toggleButtonHandler() {
      this.setState({
        isToggle: !this.state.isToggle
      });
      //console.log(this.state.isToggle);
  }

  render() {
    return (
      <div className="main">
        <h4>Toggle button example using class component.</h4>
        <button onClick={this.toggleButtonHandler}>{this.state.isToggle ? "ON" : "OFF"}</button>
      </div>
    );
  }
}

export default ToggleButton;
