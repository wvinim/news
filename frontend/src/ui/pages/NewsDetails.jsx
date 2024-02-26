import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import Header from "../components/Header";
import NewsView from "../components/NewsView";

const NewsDetails = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState({});
  const { url } = useParams();
  const basePathUrl = import.meta.env.VITE_BASE_API_URL;

  const breakUrl = url.split("-");

  const id = breakUrl[breakUrl.length - 1];

  useEffect(() => {
    axios
      .get(`${basePathUrl}/${id}`)
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        navigate("/");
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={10}>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          Voltar
        </Link>
      </Grid>
      <Grid item xs={10}>
        <NewsView article={news} />
      </Grid>
    </Grid>
  );
};

export default NewsDetails;
