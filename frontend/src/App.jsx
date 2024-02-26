import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsList from "./components/NewsList";
import NewsDetails from "./components/NewsDetails";
import { NewsProvider } from "./contexts/NewsContext";

function App() {
  return (
    <NewsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<NewsList />}></Route>
          <Route path="/news/:url" element={<NewsDetails />}></Route>
        </Routes>
      </Router>
    </NewsProvider>
  );
}

export default App;
