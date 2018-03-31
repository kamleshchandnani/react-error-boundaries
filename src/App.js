import React, { Component } from "react";
import "./App.css";
import Profile from "./modules/Profile";
import ErrorBoundary from "./modules/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Profile />
      </ErrorBoundary>
    );
  }
}

export default App;
