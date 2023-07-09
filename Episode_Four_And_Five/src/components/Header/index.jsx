import { Box, IconButton } from "@mui/material";
import React from "react";
import { headerData } from "./headerData";
import styles from "./styles";
import Logo from "./swiggy.png";

const Header = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src={Logo} alt="logo" sx={{ width: "100px" }} />
      <Box sx={styles.itemWrapper}>
        {headerData.map(({ icon, label }, index) => {
          return (
            <Box key={index} sx={styles.item}>
              <IconButton>{icon}</IconButton>
              <Box sx={styles.label}>{label}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Header;
