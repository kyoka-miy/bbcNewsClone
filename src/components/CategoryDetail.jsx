import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { News } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const CategoryDetail = () => {
  const [news, setNews] = useState([]);
  const { selectedCategory } = useParams();

  useEffect(() => {
    fetchFromAPI(`top-headlines?country=us&category=${selectedCategory}`).then(
      (data) => setNews(data.articles)
    );
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: "column" }}>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          <span
            style={{
              color: "#4a4a4a",
              textTransform: 'capitalize'
            }}
          >
            {selectedCategory}
          </span>
        </Typography>
        <News news={news}></News>
      </Box>
      <Box
        sx={{
          height: { sx: "auto" },
          px: { sx: 0, md: 2 },
        }}
      >
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#4a4a4a" }}
        >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>
    </Stack>
  );
};

export default CategoryDetail;
