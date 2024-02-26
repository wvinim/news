import React from "react";
import NewsList from "./components/NewsList";
import { NewsProvider } from "./contexts/NewsContext";

function App() {
  return (
    <NewsProvider>
      <div className="App">
        <NewsList />
      </div>
    </NewsProvider>
  );
}

export default App;
