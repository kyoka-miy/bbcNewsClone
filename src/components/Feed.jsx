import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { NewsSection } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = ({ selectedCategory, setSelectedCategory }) => {
  const [news, setNews] = useState([]);
  const [business, setBusiness] = useState([]);
  const [health, setHealth] = useState([]);
  setSelectedCategory('')

  useEffect(() => {
    fetchFromAPI(`top-headlines?country=us&category=general`).then((data) =>
      setNews(data.articles)
    );
    fetchFromAPI(
      `top-headlines?country=us&category=business`
    ).then((data) => setBusiness(data.articles));
    fetchFromAPI(
      `top-headlines?country=us&category=health`
    ).then((data) => setHealth(data.articles));
  }, []);
//   if (!news?.length || !business?.length || !health?.length) return "Loading...";
  return (
    <Stack sx={{ flexDirection: "column" }}>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          <span
            style={{
              color: "#4a4a4a",
            }}
          >
            Welcome to CCB.com
          </span>
        </Typography>
        <NewsSection news={news.slice(0, 8)} category={'General'}></NewsSection>
        <NewsSection news={business.slice(0, 4)} category={'Business'}></NewsSection>
        <NewsSection news={health.slice(0, 4)} category={'Health'}></NewsSection>
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
          Copyright © 2023 Kyoka M
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
