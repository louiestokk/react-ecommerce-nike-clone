import React from "react";
import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    height: "100%",
    background: "black",
    color: "white",
    marginBottom: "2rem",
    marginTop: "2rem",
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  icons: {
    display: "flex",
    marginTop: "2.2rem",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2.2rem",
  },
  link: {
    color: "white",
    fontFamily: "Anton",
    letterSpacing: "1px ",
    marginTop: "0.5rem",
    textTransform: "uppercase",
    fontSize: "0.9rem",
    opacity: "0.9",
    "&:hover": {
      opacity: "0.6",
    },
    ["@media (max-width:644px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "0.7rem",
      marginLeft: "1rem",
    },
  },
  sublink: {
    color: "white",
    opacity: "0.6",
    fontSize: "0.85rem",
    marginTop: "0.8rem",
    "&:hover": {
      opacity: "1",
    },
    ["@media (max-width:644px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "0.7rem",
      marginTop: "0.4rem",
      marginLeft: "1rem",
    },
  },
  iconcont: {
    height: "32px",
    width: "32px",
    borderRadius: "50%",
    background: "white",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: "0.5",
    fontSize: "1.2rem",
    marginRight: "0.3rem",
    ["@media (max-width:644px)"]: {
      // eslint-disable-line no-useless-computed-key
      height: "18px",
      width: "18px",
    },
  },
  icon: {
    ["@media (max-width:644px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "0.7rem",
    },
  },
  divider: {
    width: "97%",
    height: "0.5px",
    background: "white",
    margin: "1rem auto",
    opacity: "0.2",
  },
  bottomlinks: {
    display: "flex",
    justifyContent: "end",
  },
  bottomlink: {
    fontSize: "0.7rem",
    color: "white",
    opacity: "0.5",
    marginRight: "1.2rem",
  },
}));
