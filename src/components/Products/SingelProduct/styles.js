import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    marginLeft: "0.2rem",
    marginBottom: "3rem",
    transition: "all0.3s linear",
    marginTop: "2rem"
  },
  media: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    backgroundPosition: "center",
    ["@media (min-width:900px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "600px",
      marginRight: "3rem"
    }
  },
  mediaCont: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    overflowX: "scroll"
  },
  images: {
    marginRight: "0.3rem",
    marginTop: "0.5rem",
    cursor: "pointer"
  },
  image: {
    width: "140px",
    height: "160px",
    borderRadius: "5px 5px"
  },
  sizeCont: {
    marginTop: "3rem",
    ["@media (min-width:900px)"]: {
      // eslint-disable-line no-useless-computed-key
    }
  },
  subroot: {
    height: "100%",
    transition: "all0.3s linear",
    ["@media (min-width:900px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "flex",
      height: "100%"
    }
  }
}));
