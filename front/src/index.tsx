import React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ModuleReducer } from "@jswf/redux-module";
import { MessageForm } from "./MessageForm";
import { MessageList } from "./MessageList";

function App() {
  return (
    <>
      <MessageForm />
      <MessageList />
    </>
  );
}

const store = createStore(ModuleReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
