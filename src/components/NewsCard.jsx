import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
} from "../utils/constants";

const NewsCard = ({
  news: {
    title,
    description,
    url,
    urlToImage,
    source: { name },
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <a href={url}>
        <CardMedia
          image={urlToImage}
          alt={title}
          sx={{
            width: {
              xs: "100%",
              sm: "358px",
              md: "320px",
            },
            height: 180,
          }}
        ></CardMedia>
      </a>
      <CardContent sx={{ height: "138px" }}>
        <a href={url}>
          <Typography variant="subtitle1" fontWeight="bold" color="#000">
            {title.slice(0, 60)}
          </Typography>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {name}
          </Typography>
          <Typography variant="subtitle2" color="#000">
            {description}...
          </Typography>
        </a>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
