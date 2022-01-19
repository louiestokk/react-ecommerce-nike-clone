import React from "react";
import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    height: "20rem",
    background: "black",
    color: "white",
    marginBottom: "2rem",
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  line: {
    height: "3px",
    width: "98%",
    color: "white",
  },
  icons: {
    display: "flex",
  },
  links: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    color: "white",
    fontFamily: "Anton",
    letterSpacing: "1px ",
    marginTop: "0.5rem",
    textTransform: "uppercase",
  },
}));
