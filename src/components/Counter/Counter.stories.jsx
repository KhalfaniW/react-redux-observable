import { Provider } from "react-redux";
import { store } from "../../store";
import Counter from "./Counter";

export default {
  title: "Components/Counter",
  component: Counter,
  decorators: [(Story) => <Provider store={store}>{Story()}</Provider>],
};

export const Default = {
  render: () => <Counter />,
};

export const WithInitialState = {
  render: () => <Counter />,
  decorators: [
    (Story) => {
      store.dispatch({ type: "counter/increment" });
      return Story();
    },
  ],
};
