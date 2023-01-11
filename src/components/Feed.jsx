import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { NewsSection, Loader } from "./";
import { useGetNewsCategoryQuery } from "../services/newsApi";

const Feed = ({ setSelectedCategory }) => {
  setSelectedCategory("");

  const { data: general, isFetching } = useGetNewsCategoryQuery("general");
  const { data: business, isFetching: bisFetching } =
    useGetNewsCategoryQuery("business");
  const { data: health, isFetching: hisFetching } =
    useGetNewsCategoryQuery("health");
  const generalNews = general?.articles;
  const businessNews = business?.articles;
  const healthNews = health?.articles;
  if (isFetching || bisFetching || hisFetching) return <Loader />;

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
        <NewsSection
          news={generalNews.slice(0, 8)}
          category={"General"}
        ></NewsSection>
        <NewsSection
          news={businessNews.slice(0, 4)}
          category={"Business"}
        ></NewsSection>
        <NewsSection
          news={healthNews.slice(0, 4)}
          category={"Health"}
        ></NewsSection>
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
