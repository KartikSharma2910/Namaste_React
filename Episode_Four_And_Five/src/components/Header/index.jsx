import { Box, IconButton } from "@mui/material";
import React from "react";
import useRealTimeLocation from "../../hooks/useRealTimeLocation";
import { headerData } from "./headerData";
import styles from "./styles";
import Logo from "./swiggy.png";

const Header = () => {
  const location = useRealTimeLocation();

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.locationWrapper}>
        <Box component="img" src={Logo} alt="logo" sx={{ width: "100px" }} />
        <Box sx={styles.location}>
          {location ? location : "Fetching Location..."}
        </Box>
      </Box>
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
