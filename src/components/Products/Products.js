import React, { useState } from "react";
import HomeTextSlider from "../HomeTextSlider";
import useStyles from "./styles";
import { BsFilter } from "react-icons/bs";
import Filter from "../Filter/Filter";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import { useProductsContext } from "../../context/products_context";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useFilterContext } from "../../context/filter_context";
import styled from "styled-components";
const Products = () => {
  const { products, categories, loading } = useProductsContext();
  const { showFilter, setShowFilter } = useFilterContext();
  const classes = useStyles();
  return (
    <Wrapper>
      <HomeTextSlider />
      <h4 className="products-top-h4">Styles for Self Love</h4>
      <section className="sss" style={{ marginBottom: "1rem" }}>
        <div className="products-top-div">
          {categories.map((el, ind) => {
            return (
              <Link
                to={`/${el.toLowerCase()}`}
                key={ind}
                className={classes.category}
              >
                {el}
              </Link>
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

          <button
            type="button"
            className={classes.filterbtn}
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter
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
    </Wrapper>
  );
};

export default Products;
const Wrapper = styled.section`
  .products-top {
    font-family: "Dongle", sans-serif;
    height: 100%;
    width: 100%;
    overflow-x: scroll;
    border-bottom: 1px solid rgb(219, 217, 217);
  }
  .products-top-h4 {
    font-size: 2rem;
    margin: 1.6rem 1rem;
    font-family: "Dongle", sans-serif;
  }
  .products-top-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 2.4rem;
    font-family: "Dongle", sans-serif;
    border-bottom: 1px solid rgb(226, 225, 225);
    overflow-x: scroll;
  }
  .numItems {
    margin-left: 1rem;
    font-size: 1.7rem;
    font-family: "Dongle", sans-serif;
    font-weight: 100;
    margin-top: 0.7rem;
    color: rgb(167, 167, 167);
  }
`;
