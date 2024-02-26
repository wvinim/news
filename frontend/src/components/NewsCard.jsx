import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const NewsCard = ({ article }) => {
  return (
    <Card sx={{ border: "none", boxShadow: "none" }}>
      <CardMedia
        component="img"
        image={article.thumbnail}
        alt={article.titulo}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {article.titulo}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
