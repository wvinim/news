import { useContext, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Header from "./Header";
import NewsCard from "./NewsCard";
import { NewsContext } from "../contexts/NewsContext";

const NewsList = () => {
  const { newsList, setNewsList } = useContext(NewsContext);
  const basePathUrl = import.meta.env.VITE_BASE_API_URL;

  useEffect(() => {
    axios
      .get(`${basePathUrl}/list`)
      .then((response) => {
        setNewsList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, [setNewsList]);

  return (
    <Grid container spacing={2}>
      <Header />
      {newsList.map((article, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <NewsCard article={article} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsList;
