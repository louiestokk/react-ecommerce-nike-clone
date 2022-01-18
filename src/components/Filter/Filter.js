import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import useStyles from "./styles";
import { useFilterContext } from "../../context/filter_context";
import { useProductsContext } from "../../context/products_context";
import { commerce } from "../lib/commerce";

const Filter = () => {
  const { categories, uniqcolor, products, setProducts } = useProductsContext();
  const {
    checked25,
    checked50,
    checked100,
    checked150,
    checkedover150,
    setChecked25,
    setChecked50,
    setChecked100,
    setChecked150,
    setCheckedOver150,
  } = useFilterContext();
  const classes = useStyles();

  //
  document.querySelectorAll(".gender-cont").forEach((gender) => {
    gender.addEventListener("click", (e) => {
      fetchProductsCategory(e.currentTarget.textContent);
    });
  });
  //

  const fetchProductsCategory = async (param) => {
    const resp = await commerce.products
      .list({
        category_slug: [`${param}`],
      })
      .then((response) => response.data);
    setProducts(resp);
  };

  return (
    <section className="filter-container">
      <div className="filter-by-category">
        <h4>Shop by Category</h4>
        <div className="filter-category">
          {categories.map((category, ind) => {
            return (
              <h5
                key={ind}
                style={{ marginLeft: "0.5rem" }}
                onClick={(e) =>
                  fetchProductsCategory(e.currentTarget.textContent)
                }
              >
                {category}
              </h5>
            );
          })}
        </div>
      </div>
      <div className="gender-filter filter-category">
        <div className="gender-cont">
          <input type="checkbox" value="Men" />
          <label htmlFor="men">Men</label>
        </div>
        <div className="gender-cont">
          <input type="checkbox" value="Women" />
          <label htmlFor="women">Women</label>
        </div>
        <div className="gender-cont">
          <input type="checkbox" value="Kids" />
          <label htmlFor="kids">Kids</label>
        </div>
      </div>
      <div className="filter-price filter-category">
        <h4 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
          Shop by Price
        </h4>
        <div className="price-cont" onClick={() => setChecked25(!checked25)}>
          {!checked25 && <input type="checkbox" value={25} />}
          {checked25 && <FaCheckCircle />}

          <label>$0 - $25</label>
        </div>
        <div className="price-cont" onClick={() => setChecked50(!checked50)}>
          {!checked50 && <input type="checkbox" value={50} />}
          {checked50 && <FaCheckCircle />}
          <label>$25 - $50</label>
        </div>
        <div className="price-cont" onClick={() => setChecked100(!checked100)}>
          {!checked100 && <input type="checkbox" value={100} />}
          {checked100 && <FaCheckCircle />}
          <label>$50 - $100</label>
        </div>
        <div className="price-cont" onClick={() => setChecked150(!checked150)}>
          {!checked150 && <input type="checkbox" value={150} />}
          {checked150 && <FaCheckCircle />}
          <label>$100- $150</label>
        </div>
        <div
          className="price-cont"
          onClick={() => setCheckedOver150(!checkedover150)}
        >
          {!checkedover150 && <input type="checkbox" value=">150" />}
          {checkedover150 && <FaCheckCircle />}
          <label>Over $150</label>
        </div>
      </div>
      <div className="filter-color">
        {uniqcolor.map((el, ind) => {
          return (
            <div key={ind} className="color">
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  background: el,
                  borderRadius: "50%",
                  border: `${el === "white" && "1px solid gray"}`,
                  marginTop: "0.5rem",
                }}
              ></div>
              <p style={{ fontSize: "0.8rem" }}>{el}</p>
            </div>
          );
        })}
      </div>
      <div
        style={{
          marginTop: "1.8rem",
          marginLeft: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.4rem",
          }}
        >
          <input type="checkbox" value="freeshipping" name="freeshipping" />
          <label
            htmlFor="freeshipping"
            style={{
              marginLeft: "0.3rem",
              fontSize: "1rem",
            }}
          >
            Free shipping
          </label>
        </div>
        <button type="button" className={classes.button}>
          Clear filter
        </button>
      </div>
    </section>
  );
};

export default Filter;

// free deliver shipping fee price === 0
