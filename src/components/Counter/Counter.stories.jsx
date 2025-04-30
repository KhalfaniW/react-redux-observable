// Ladle stories for Counter component with Redux Provider

import React from "react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "../../store";

export const Default = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
