import React from "react";
import { render } from "@testing-library/react";
import NewsView from "../NewsView";

describe("NewsView Component", () => {
  test("renders NewsView with correct image data", () => {
    const mockNews = {
      chapeu: "mock chapeu",
      titulo: "mock titulo",
      conteudo: "mock conteudo",
    };
    const { getByText } = render(<NewsView article={mockNews} />);

    const chapeuElem = getByText("mock chapeu");
    expect(chapeuElem).toBeInTheDocument();

    const tituloElem = getByText("mock titulo");
    expect(tituloElem).toBeInTheDocument();

    const conteudoElem = getByText("mock conteudo");
    expect(conteudoElem).toBeInTheDocument();
  });
});
