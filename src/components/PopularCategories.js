import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    marginBottom: "5rem",
    ["@media (min-width:644px)"]: {
      // eslint-disable-line no-useless-computed-key
      marginTop: "3rem"
    }
  },
  container: {
    display: "flex",
    justifyContent: "center"
  },
  item: {
    margin: "1.2rem 0.7rem",
    cursor: "pointer",
    ["@media (min-width:644px)"]: {
      // eslint-disable-line no-useless-computed-key
      margin: "1rem 1rem"
    }
  },
  img: {
    height: "50px",
    width: "50px",
    ["@media (min-width:644px)"]: {
      // eslint-disable-line no-useless-computed-key
      height: "70px",
      width: "70px"
    }
  },
  p: {
    fontSize: "0.7rem",
    fontWeight: "bold"
  }
});
const imageArray = [
  {
    url: "https://www.svgrepo.com/show/161799/baby-stroller.svg",
    title: "Duovagnar",
    path: "products"
  },
  {
    url: "https://www.svgrepo.com/show/483597/baby-26.svg",
    title: "Tillbehör"
  },
  {
    url: "https://www.svgrepo.com/show/57180/car-baby-chair.svg",
    title: "Bilstolar"
  },
  {
    url: "https://www.svgrepo.com/show/477201/sale-free-5.svg",
    title: "Rea"
  }
];
const PopularCategories = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className="popular-products-title">Populära Kategorier</h1>
      <section className={classes.container}>
        {imageArray?.map((image, i) => {
          return (
            <div key={i} className={classes.item}>
              <img src={image.url} alt={image.title} className={classes.img} />
              <p className="popular-p">{image.title}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PopularCategories;