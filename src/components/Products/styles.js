import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  category: {
    marginRight: "2rem",
    fontSize: "1.7rem",
    fontWeight: "100",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.6",
    },
  },
  filterbtn: {
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    width: "6.4rem",
    height: "2.4rem",
    justifyContent: "center",
    background: "transparent",
    border: "1px solid rgb(204, 201, 201)",
    marginRight: "1rem",
    borderRadius: "20px 20px",
    marginTop: "0.7rem",
    cursor: "pointer",
    "&:hover": {
      border: "1.3px solid black",
    },
  },
}));
