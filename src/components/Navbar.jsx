import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar, CategoryBar } from "./";

const Navbar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center"}}>
        <span className="logo">C</span>
        <span className="logo">C</span>
        <span className="logo">B</span>
      </Link>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ justifyContent: "space-between" }}
      >
        <CategoryBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <SearchBar />
      </Stack>
    </Stack>
  );
};

export default Navbar;
