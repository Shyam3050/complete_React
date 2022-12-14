import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("Greeting Components", () => {
  test("renders good to see you if button was not clicked", () => {
    render(<Greeting />);
    const outPutElement = screen.getByText("Good to see you", { exact: false });
    expect(outPutElement).toBeInTheDocument();
  });

  test("render changed if button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonEement = screen.getByRole("button");
    userEvent.click(buttonEement);

    // Assert
    const outPutElement = screen.getByText("Changed", { exact: false });
    expect(outPutElement).toBeInTheDocument();
  });
  test('does not render "good to see you" if button was clicked ', () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonEement = screen.getByRole("button");
    userEvent.click(buttonEement);

    // Assert
    const outPutElement = screen.queryByText("Good to see you", {
      exact: false,
    });
    expect(outPutElement).toBeNull();
  });
});

// Arrange // Set up the test data. test conditions and test environment
// Act //Run Logic that should be tested
// Assert //compare exicution results with expected result
