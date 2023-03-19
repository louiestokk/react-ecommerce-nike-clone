import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    width: "300px",
    display: "flex"
  },
  media: {
    height: "120px",
    width: "100px",
    objectFit: "cover"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  cardActions: {
    display: "flex",
    flexDirection: "column"
  },
  buttons: {
    display: "flex",
    alignItems: "center"
  }
}));
