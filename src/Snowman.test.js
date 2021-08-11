import Snowman from "./Snowman";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

const MAX_WRONG = 3;
let renderedGame;
function clickLetter(letter) {
    return fireEvent.click(renderedGame.getByText(letter));
}

beforeEach(function () {
    renderedGame = render(<Snowman maxWrong={MAX_WRONG} words={["apple"]}/>);
});

it("renders without crashing", function() {
    render(<Snowman />);
  })

it("matches snapshot", function() {
    const { container } = render(<Snowman />);
    expect(container).toMatchSnapshot();
    })

it("only allows maxGuesses", function() {
    clickLetter("b");
    clickLetter("o");
    clickLetter("t");

    expect(renderedGame.getByText("You lose: apple")).toBeInTheDocument();
})





   