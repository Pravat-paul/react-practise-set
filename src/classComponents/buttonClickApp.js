import React from "react";
import '../index.css';

class ButtonClickApp extends React.Component {

    constructor(){
        super()
        this.state = {
            count:0
        };
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            count: this.state.count + 1
        });
    }

  render() {
    return (
      <div className="main">
        <h1>Welcome to React</h1>
        {this.state.count > 0 && <p>You have clicked me : {this.state.count} times.</p>}
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default ButtonClickApp;
