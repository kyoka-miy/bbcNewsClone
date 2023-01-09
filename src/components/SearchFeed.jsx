import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { News } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = ({ selectedCategory, setSelectedCategory }) => {
  const [news, setNews] = useState([]);
  const { searchTerm } = useParams();
  setSelectedCategory("");

  useEffect(() => {
    fetchFromAPI(`everything?q=${searchTerm}`).then((data) =>
      setNews(data.articles)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Search Results for:
        <span
          style={{
            color: "#F31503",
            marginLeft: "10px",
            display: "inline-block",
          }}
        >
          {searchTerm}
        </span>
      </Typography>
      <News news={news}></News>
    </Box>
  );
};

export default SearchFeed;
