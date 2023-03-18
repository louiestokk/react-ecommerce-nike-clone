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
  const [loading, setLoading] = useState(false);
  const fetchProducst = async () => {
    try {
      setLoading(true);
      const { data } = await commerce.products.list();
      setProducts(data);
      //
      const color = [].concat(...data?.map((el) => el?.variant_groups));
      const prov = color
        .filter((el) => el?.name === "color")
        .map((el) => el?.options);
      const colors = Array.from(
        new Set([].concat(...prov)?.map((el) => el?.name))
      );
      setuniqcolor(colors);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    //
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
        fetchProducst,
        loading
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

// commercejs har api för category_slug ['sneakers','black']
// commercejs api listing products sorted by highest price
// commercejs api listing products serach query
