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
import styled from "styled-components";
import PopularCategories from "../PopularCategories";
const Products = () => {
  const { products, loading } = useProductsContext();
  const [filtering, setfiltering] = useState(false);
  const classes = useStyles();
  return (
    <Wrapper>
      <HomeTextSlider />
      <section className="sss" style={{ marginBottom: "1rem" }}>
        <div className="products-top-div">
          <PopularCategories />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.6rem"
          }}
        >
          <select
            className={classes.filterbtn}
            style={{
              width: "7rem",
              textAlign: "center",
              marginRight: "0rem",
              marginLeft: "0.75rem"
            }}
          >
            <option value={"high"}>Högsta Pris</option>
            <option value={"low"}>Lägsta Pris</option>
            <option value={"best"}>Bäst Säljare</option>
          </select>

          <button type="button" className={classes.filterbtn}>
            Filter
            <BsFilter style={{ fontSize: "1.3rem", marginLeft: "0.2rem" }} />
          </button>
        </div>
      </section>
      <Filter showFilter={filtering} />
      <div className={classes.container}>
        {loading && (
          <Oval heigth="150" width="150" color="black" ariaLabel="loading" />
        )}
        <div className="product-container">
          {products.map((product, ind) => {
            return <Product product={product} />;
          })}
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
    height: 100%;
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
