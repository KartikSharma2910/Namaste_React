import { Box, Skeleton } from "@mui/material";
import React from "react";
import useDataFetcher from "../../hooks/useDataFetcher";
import styles from "./styles";

const Home = () => {
  const { data, Loading } = useDataFetcher();

  return (
    <Box>
      {Loading ? (
        <Box sx={styles.wrapper}>
          {Array.from({ length: 15 }).map((_, index) => (
            <Skeleton key={index} sx={styles.skeletton} />
          ))}
        </Box>
      ) : (
        <Box sx={styles.wrapper}>
          {data.data?.cards[0]?.data.data.cards.map((item) => {
            return (
              <Box key={item.data.uuid} sx={styles.card}>
                <Box>
                  <Box sx={styles.name}>{item.data.name}</Box>
                  <Box sx={styles.cuisines}>
                    {item.data?.cuisines?.join(" , ")}
                  </Box>
                </Box>
                <Box sx={styles.ratingWrapper}>
                  <Box>{item.data.avgRating}</Box>
                  <Box>{item.data.deliveryTime} min</Box>
                  <Box>{item.data.costForTwoString}</Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Home;
