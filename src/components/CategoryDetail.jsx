import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { News, Loader } from "./";
import { useGetNewsCategoryQuery } from "../services/newsApi";
import { useParams } from "react-router-dom";

const CategoryDetail = () => {
  const { selectedCategory } = useParams();
  const { data, isFetching } = useGetNewsCategoryQuery(selectedCategory);
  const news = data?.articles;
  if (isFetching) return <Loader />;

  return (
    <Stack sx={{ flexDirection: "column" }}>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          <span
            style={{
              color: "#4a4a4a",
              textTransform: "capitalize",
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
          Copyright © 2023 Kyoka M
        </Typography>
      </Box>
    </Stack>
  );
};

export default CategoryDetail;
