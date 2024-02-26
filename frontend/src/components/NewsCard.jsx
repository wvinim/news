import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const NewsCard = ({ article }) => {
  return (
    <Link
      to={`/news/${article.titulo
        .toLowerCase()
        .replace(/[^a-z\s]/g, "")
        .trim()
        .replace(/\s+/g, "-")}-${article.id}`}
      style={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          border: "none",
          boxShadow: "none",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <CardMedia
          component="img"
          image={article.thumbnail}
          alt={article.titulo}
        />
        <CardContent>
          <Typography variant="caption" component="div">
            {article.chapeu}
          </Typography>
          <Typography variant="h6" component="div">
            {article.titulo}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCard;
