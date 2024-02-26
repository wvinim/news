import { useContext, useEffect } from "react";
import { Grid } from "@mui/material";
import Header from "./Header";
import NewsCard from "./NewsCard";
import { NewsContext } from "../contexts/NewsContext";
import axios from "axios";

const NewsList = () => {
  const { news, setNews } = useContext(NewsContext);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/news/list")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, [setNews]);

  return (
    <Grid container spacing={2}>
      <Header />
      {news.map((article, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <NewsCard article={article} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsList;
