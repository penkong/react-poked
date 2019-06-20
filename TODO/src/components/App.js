import "./App.css";
import React, { Component } from "react";
import TodoList from "./TodoList";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TodoList/>
      </div>
    );
  }
}

export default App;
