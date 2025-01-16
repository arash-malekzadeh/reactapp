import { Component } from "react";

class ClassBasedComponent extends Component {
  state = {
    showText: false,
    changeColor: false,
    count: 0,
    changeCountStyle: true,
  };

  handleClick = () => {
    const { showText, changeColor, count, changeCountStyle } = this.state;
    this.setState({
      showText: !showText,
      changeColor: !changeColor,
      count: 0,
      changeCountStyle: true,
    });
  };
  componentDidMount() {
    console.log(this.state.showText);
    this.setState({
      showText: !this.state.showText,
    });
  }
  handleCont = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState &&
      prevState.count != this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        changeCountStyle: false,
      });
    }
  }

  render() {
    const { showText, changeColor, count, changeCountStyle } = this.state;
    return (
      <div>
        {showText ? (
          <h4 style={{ color: changeColor ? "red" : "black" }}>
            Class Based Component
          </h4>
        ) : null}

        <button onClick={this.handleClick}>toggle text</button>
        <button onClick={this.handleCont}> Increase Count Value</button>
        <h3 style={{ color: changeCountStyle ? "blue" : "black" }}>
          Count is {count}
        </h3>
      </div>
    );
  }
}

export default ClassBasedComponent;
