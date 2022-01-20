import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    height: "340px",
    margin: "1rem 0.75rem",
  },
  media: {
    height: "120px",
    width: "120px",
    objectFit: "cover",
    marginRight: "0.5rem",
    ["@media (min-width:663px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "280px",
      height: "340px",
    },
  },
  name: {
    color: "black",
    fontSize: "0.85rem",
    fontWeight: "100",
  },
  cardcontent: {},
}));
// height 340px
// width 280px
