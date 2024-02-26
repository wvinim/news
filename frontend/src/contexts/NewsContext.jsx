import { createContext, useState } from "react";
export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([]);

  return (
    <NewsContext.Provider value={{ newsList, setNewsList }}>
      {children}
    </NewsContext.Provider>
  );
};
