const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
    height: "80px",
    boxShadow: "0 15px 40px -20px rgba(40,44,63,.15)",
    transition: "transform .3s ease",
    backgroundColor: "white",
    position: "sticky",
    top: 0,
  },

  locationWrapper: {
    display: "flex",
    alignItems: "center",
  },

  location: {
    width: "400px",
    fontSize: "14px",
  },

  itemWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  label: {
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: 500,
    "&:hover": {
      color: "#fc8019",
    },
  },
};

export default styles;
