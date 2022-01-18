import React, { useEffect, useState, useContext } from "react";

const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
  const [checked25, setChecked25] = useState(false);
  const [checked50, setChecked50] = useState(false);
  const [checked100, setChecked100] = useState(false);
  const [checked150, setChecked150] = useState(false);
  const [checkedover150, setCheckedOver150] = useState(false);

  return (
    <FilterContext.Provider
      value={{
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
        setChecked25,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
export { FilterContext, FilterProvider };
