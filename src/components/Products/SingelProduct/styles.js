import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    marginLeft: "0.2rem",
  },
  media: {
    width: "100%",
    height: "500px",
  },
  mediaCont: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    overflowX: "scroll",
  },
  images: {
    marginRight: "0.3rem",
    marginTop: "0.5rem",
    cursor: "pointer",
  },
  image: {
    width: "140px",
    height: "160px",
    borderRadius: "5px 5px",
  },
  sizeCont: {},
}));