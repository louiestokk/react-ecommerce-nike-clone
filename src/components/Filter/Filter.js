import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { commerce } from "../lib/commerce";

const Filter = ({ showFilter }) => {
  const fetchProductsCategory = async (param) => {
    const resp = await commerce.products
      .list({
        category_slug: [`${param}`]
      })
      .then((response) => response.data);
  };

  return <div></div>;
};

export default Filter;
