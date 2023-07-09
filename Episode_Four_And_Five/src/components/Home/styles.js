const styles = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1em",
    marginTop: "2em",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    height: "120px",
    width: "27%",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    padding: "1.5em 1em",
    position: "relative",
  },

  name: {
    fontSize: "20px",
    fontWeight: 500,
  },

  cuisines: {
    fontSize: "14px",
  },

  ratingWrapper: {
    position: "absolute",
    bottom: 10,
    left: 14,
    right: 14,
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
  },

  skeletton: {
    width: "28%",
    height: "220px",
  },
};

export default styles;
