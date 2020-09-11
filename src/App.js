import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

import "./App.css";
import Todo from "./components/Todo";
import reducer from "./config/Reducer";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
