import React from "react";
import { blogposts } from "../utils/blogdata";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    textAlign: "center"
  },
  img: {
    width: "300px",
    height: "300px"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    ["@media (min-width:644px)"]: {
      // eslint-disable-line no-useless-computed-key
      flexDirection: "row",
      justifyContent: "center"
    }
  },
  item: {
    margin: "1rem 1rem"
  }
});
const Blog = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className="popular-products-title">Blog posts</h1>
      <section className={classes.container}>
        {blogposts?.map((post, ind) => {
          return (
            <div key={ind} className={classes.item}>
              <img src={post.url} alt={post.title} className={classes.img} />
              <p className="post-date">{post.date}</p>
              <h4 className="post-title">{post.title}</h4>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Blog;