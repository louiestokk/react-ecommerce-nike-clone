import React, { useState, useEffect, useContext } from "react";
import { commerce } from "../components/lib/commerce";
const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errormessage, setErrorMessage] = useState("");
  const [uniqcolor, setuniqcolor] = useState([]);

  //
  const fetchProducst = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    const color = [].concat(...data.map((el) => el.variant_groups));
    const newarr = [].concat(...color).map((color) => {
      setuniqcolor(color.options.map((el) => el.name));
    });
  };

  const fetchCategoirs = async () => {
    const { data } = await commerce.categories.list();
    setCategories(data.map((el) => el.name));
  };

  useEffect(() => {
    fetchProducst();
    fetchCategoirs();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        cart,
        setCart,
        order,
        setOrder,
        errormessage,
        setErrorMessage,
        uniqcolor,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, ProductsProvider };
