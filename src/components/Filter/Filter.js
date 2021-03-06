import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import useStyles from "./styles";
import { useFilterContext } from "../../context/filter_context";
import { useProductsContext } from "../../context/products_context";
import { commerce } from "../lib/commerce";
import styled from "styled-components";
const Filter = () => {
  const { categories, uniqcolor, products, setProducts, fetchProducst } =
    useProductsContext();
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
    showFilter,
    setShowFilter,
  } = useFilterContext();
  const classes = useStyles();

  //
  document.querySelectorAll(".gender-cont").forEach((gender) => {
    gender.addEventListener("click", (e) => {
      fetchProductsCategory(e.currentTarget.textContent);
    });
  });
  document.querySelectorAll(".price-cont").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.currentTarget.children[0].value === ">150") {
        const newitems = products.filter((el) => el.price.raw > 150);
        setProducts(newitems);
      }
      const newitems = products.filter(
        (el) => el.price.raw <= e.currentTarget.children[0].value
      );
      if (newitems.length === 0) return;
      setProducts(newitems);
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

  const handleColor = async (el) => {
    try {
      const { data } = await commerce.products.list({
        query: el,
      });

      setProducts(data);
    } catch (error) {
      console.log(error.data.error.message);
    }
  };

  // free shipping price=0

  return (
    <Section
      className={
        showFilter ? "filter-container show-filter" : "filter-container"
      }
    >
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
                onClick={() => handleColor(el)}
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
        {/* <div
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
        </div> */}
        <button
          type="button"
          className={classes.button}
          onClick={() => fetchProducst()}
        >
          Clear filter
        </button>
      </div>
    </Section>
  );
};

export default Filter;

const Section = styled.section`
  .filter-container {
    height: 1100px;
    display: none;
  }
  .show-filter {
    display: block;
  }
  .filter-by-category h4 {
    font-size: 1.2rem;
    color: var(--mainTextColor);
    margin-bottom: 1rem;
    margin-left: 1rem;
  }
  .filter-by-category h5 {
    font-size: 1rem;
    color: var(--mainTextColor);
    margin-top: 0.35rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
    cursor: pointer;
  }
  .filter-by-category h5:hover {
    opacity: 0.7;
  }
  .filter-category {
    border-top: 1px solid rgb(226, 225, 225);
    width: 150px;
    font-family: "Roboto", sans-serif;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: scroll;
    margin-left: 1rem;
  }

  .gender-filter {
    display: flex;
    flex-direction: column;
  }
  .gender-filter div {
    margin-top: 0.5rem;
  }
  .gender-filter label {
    margin-left: 0.3rem;
    font-size: 1rem;
  }
  .filter-price {
    height: 240px;
  }
  .filter-price div {
    margin-top: 0.5rem;
  }
  .filter-price label {
    margin-left: 0.3rem;
  }
  .filter-color {
    border-top: 1px solid rgb(226, 225, 225);
    border-bottom: 1px solid rgb(226, 225, 225);
    width: 150px;
    font-family: "Roboto", sans-serif;
    height: 270px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: scroll;
    margin-top: 0.5rem;
  }
  .filter-color p {
    margin-left: 0.3rem;
    margin-top: 0.5rem;
  }
  .color {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-right: 0.2rem;
    padding: 0 0;
  }
`;
