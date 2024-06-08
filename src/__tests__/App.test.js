import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text 'Hi, I'm ______'", () => {
    //Arrange
    render(<App />);

    //Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1
    });

    //Assert
    expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text identifying the context of the image", () => {
    //Arrange
    render(<App />);

    //Act
    const image = screen.getByRole("img", {
        alt: "A picture of me"
    });

    //Assert
    expect(image).toBeInTheDocument();
});

test("displays a second-level heading with the text 'About Me'", () => {
    //Arrange
    render(<App />);

    //Act
    const aboutMe = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2
    });

    //Assert
    expect(aboutMe).toBeInTheDocument();
});

test("displays a biography paragraph", () => {
    //Arrange
    render(<App />);

    //Act
    const biography = screen.getByText(/biography/i)

    //Assert
    expect(biography).toBeInTheDocument();
});

test("two links - one for GitHub and one for LinkedIn", () => {
    //Arrange
    render(<App />);

    //Act
    const github = screen.getByRole("link", {
        name: /github/i
    });
    const linkedin = screen.getByRole("link", {
        name: /linkedin/i
    });

    //Assert
    expect(github).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
});