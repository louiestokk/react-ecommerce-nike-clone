import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    display: "flex",
  },
  container: {
    marginLeft: "5rem",
    maxWidth: "100%",
  },
  filterbtn: {
    width: "7rem",
    marginRight: "0.75rem",
    height: "2.2rem",
    borderRadius: "20px 20px",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    fontSize: "1rem",
    border: "1px solid black",
    cursor: "pointer",
    "&:hover": {
      background: "black",
      color: "white",
    },
  },
  category: {
    marginRight: "2rem",
  },
  product: {
    margin: "0 0",
  },
}));
