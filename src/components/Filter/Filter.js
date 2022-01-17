import React, { useState } from "react";
const Filter = ({ categories, colors }) => {
  return (
    <section className="filter-container">
      <div className="filter-by-category">
        <h4>Shop by Category</h4>
        <div className="filter-category">
          {categories.map((category, index) => {
            return <h5 key={index}>{category}</h5>;
          })}
        </div>
      </div>
      <div className="gender-filter filter-category">
        <div>
          <input type="checkbox" value="men" />
          <label htmlFor="men">Men</label>
        </div>
        <div>
          <input type="checkbox" value="women" />
          <label htmlFor="women">Women</label>
        </div>
        <div>
          <input type="checkbox" value="kids" />
          <label htmlFor="kids">Kids</label>
        </div>
      </div>
      <div className="filter-price filter-category">
        <h4 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
          Shop by Price
        </h4>
        <div>
          <input type="checkbox" value={25} />
          <label>$0 - $25</label>
        </div>
        <div>
          <input type="checkbox" value={25} />
          <label>$25 - $50</label>
        </div>
        <div>
          <input type="checkbox" value={25} />
          <label>$50 - $100</label>
        </div>
        <div>
          <input type="checkbox" value={25} />
          <label>$100- $150</label>
        </div>
        <div>
          <input type="checkbox" value={25} />
          <label>Over $150</label>
        </div>
      </div>
      <div className="filter-color filter-category">
        <h4 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>Color</h4>
        {[].concat(...colors).map((color) => {
          return color.options.map((el) => {
            return (
              <div className="singel-color" key={el.id}>
                <div></div>
                <p>{el.name}</p>
              </div>
            );
          });
        })}
      </div>
    </section>
  );
};

export default Filter;

// Gender checkbox när man clickar så byt checkbox rutan mot en icon svart check som nike
// Shop by Price
// color
// free deliver shipping fee price === 0
