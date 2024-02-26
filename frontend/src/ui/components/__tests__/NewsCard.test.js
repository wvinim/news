import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import NewsCard from "../NewsCard";
import { NewsProvider } from ".././../../contexts/NewsContext";

const mockNews = {
  id: "mock id",
  chapeu: "mock chapeu",
  titulo: "mock titulo",
  thumbnail: "mock thumbnail",
};

let page;

beforeEach(() => {
  page = render(
    <Router>
      <NewsProvider>
        <NewsCard article={mockNews} />
      </NewsProvider>
    </Router>
  );
});

describe("NewsCard Component", () => {
  test("renders NewsCard with correct dom elements", () => {
    const chapeuElem = page.getByText("mock chapeu");
    expect(chapeuElem).toBeInTheDocument();

    const tituloElem = page.getByText("mock titulo");
    expect(tituloElem).toBeInTheDocument();

    const thumbnailElem = page.getByAltText("mock titulo");
    expect(thumbnailElem).toBeInTheDocument();
  });
});
