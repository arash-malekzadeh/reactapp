import { Component } from "react";

class ClassBasedComponent extends Component {
  state = { showText: false, changeColor: false };

  handleClick = () => {
    const { showText, changeColor } = this.state;
    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };
  render() {
    const { showText, changeColor } = this.state;
    return (
      <div>
        {showText ? (
          <h4 style={{ color: changeColor ? "red" : "black" }}>
            Class Based Component
          </h4>
        ) : null}

        <button onClick={this.handleClick}>toggle text</button>
      </div>
    );
  }
}

export default ClassBasedComponent;
