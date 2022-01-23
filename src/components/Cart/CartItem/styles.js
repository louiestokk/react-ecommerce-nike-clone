import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    height: "260px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
