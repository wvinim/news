import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  test("renders Header with correct image", () => {
    const { getByAltText } = render(<Header />);
    const logoImage = getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();
  });
});
