import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ContextProvider extends Component {
  state = {
    token: 'qweqwe'
  };
  toggleTheme = () => {
    this.setState(prevState => {
      return {
        token: prevState.token === "Day" ? "Night" : "Day"
      };
    });
  };

  render() {
    return (
      <Provider
        value={{ token: this.state.token, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ContextProvider, Consumer as ContextConsumer };
