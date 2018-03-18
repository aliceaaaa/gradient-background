import React from "react";
import { Box } from "grid-styled";

const text = {
  fontFamily: "Arial",
  color: "#FFFFFF",
  webkitTextStroke: "1px black"
};

const Header = () => (
  <Box mb={2} py={2}>
    <h1 style={text}>Change background color!</h1>
    <h4 style={text}>Please, enter your colors:</h4>
  </Box>
);

export default Header;
