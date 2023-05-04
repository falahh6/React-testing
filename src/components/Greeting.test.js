import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders greeting text", () => {
    render(<Greeting />);
    const greetingText = screen.getByText("Hello World!");
    expect(greetingText).toBeInTheDocument();
  });

  test("renders additional text", () => {
    render(<Greeting />);
    const additionalText = screen.getByText("This is first test I'm Writing");
    expect(additionalText).toBeInTheDocument();
  });

  test("<p> text changes", () => {
    render(<Greeting />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    const changedText = screen.getByText("Changed");
    expect(changedText).toBeInTheDocument();
  });

  test("check first <p> conditional Visibility", () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const doNotshowText = screen.queryByText("This is first test I'm Writing");
    expect(doNotshowText).toBeNull();
  });
});
