import { Card, CardContent, Typography } from "@mui/material";

const NewsView = ({ article }) => {
  return (
    <Card
      sx={{
        marginLeft: "20px",
        marginRight: "20px",
        border: "none",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="caption" component="div">
          {article.chapeu}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {article.titulo}
        </Typography>

        <img
          src={article.thumbnail}
          alt={article.titule}
          style={{ maxWidth: "100%", height: "auto" }}
        />

        <div dangerouslySetInnerHTML={{ __html: article.conteudo }} />
      </CardContent>
    </Card>
  );
};

export default NewsView;
