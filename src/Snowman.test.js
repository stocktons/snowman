import Snowman from "./Snowman";
import React from "react";
import { render, fireEvent } from "@testing-library/react";


it("renders without crashing", function() {
    render(<Snowman />);
  })

it("matches snapshot", function() {
    const { container } = render(<Snowman />);
    expect(container).toMatchSnapshot();
    })

it("only allows maxGuesses", function() {
    const { container } = render(<Snowman words={["apple"]}/>);
    const button = container.querySelector('button');

    fireEvent.click(button.toHaveValue("w"));
    fireEvent.click(button.toHaveValue("q"));
    fireEvent.click(button.toHaveValue("s"));
    fireEvent.click(button.toHaveValue("x"));
    fireEvent.click(button.toHaveValue("z"));
    fireEvent.click(button.toHaveValue("c"));

    const message = container.querySelector(".message");

    expect(button).not.toBeInTheDocument();
    expect(message).toHaveTextContent("You lose");
})





   