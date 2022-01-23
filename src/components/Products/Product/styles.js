import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
  media: {
    width: "120px",
    height: "120px",
    display: "block",
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
    ["@media (max-width:663px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "0.7rem",
      maxWidth: "100px",
    },
  },
  cardcontent: {},
}));
// height 340px
// width 280px
