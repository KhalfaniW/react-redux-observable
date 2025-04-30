import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import Counter from "./Counter";

describe("Counter", () => {
  const renderCounter = () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  };

  it("renders counter with initial value", () => {
    renderCounter();
    expect(screen.getByText("Counter: 0")).toBeInTheDocument();
  });

  it("increments counter when clicking increment button", () => {
    renderCounter();
    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
  });

  it("shows loading state when clicking async button", () => {
    renderCounter();
    fireEvent.click(screen.getByText("Increment Async"));
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
