import React from "react";
import HomeTextSlider from "../HomeTextSlider";
import useStyles from "./styles";
import { BsFilter } from "react-icons/bs";
import Filter from "../Filter/Filter";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import { useProductsContext } from "../../context/products_context";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";
const Products = () => {
  const { products, categories, loading } = useProductsContext();

  const classes = useStyles();
  return (
    <>
      <HomeTextSlider />
      <h4 className="products-top-h4">Styles for Self Love</h4>
      <section className="sss">
        <div className="products-top-div">
          {categories.map((el, ind) => {
            return (
              <h2 key={ind} className={classes.category}>
                {el}
              </h2>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.6rem",
          }}
        >
          <h5 className="numItems">{products.length} Results</h5>
          <button type="button" className={classes.filterbtn}>
            Filter{" "}
            <BsFilter style={{ fontSize: "1.3rem", marginLeft: "0.2rem" }} />
          </button>
        </div>
      </section>
      <div className={classes.root}>
        <Filter />
        <div className={classes.container}>
          {loading && (
            <Oval heigth="150" width="150" color="black" ariaLabel="loading" />
          )}
          <Grid container className={classes.products}>
            {products.map((product, ind) => {
              return (
                <Grid key={ind} className={classes.product}>
                  <Product product={product} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Products;
