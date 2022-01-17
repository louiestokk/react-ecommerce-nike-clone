import { makeStyles } from "@material-ui/core";
export default makeStyles(() => ({
  button: {
    width: "6rem",
    height: "1.8rem",
    background: "black",
    border: "none",
    color: "white",
    borderRadius: "5px 5px",
    cursor: "pointer",
    "&:hover": {
      background: "white",
      color: "black",
      border: "1px solid black",
    },
  },
}));

// style={{
//     width: "6rem",
//     height: "1.8rem",
//     background: "black",
//     border: "none",
//     color: "white",
//     borderRadius: "5px 5px",
//     cursor: "pointer",
//   }}
