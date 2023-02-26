import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SortBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialState = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialState || []);

  const [order, setOrder] = useState(initialOrder || "");
  const handleFilter = (e) => {
    let newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };
  // console.log(category)
  // console.log(searchParams);
  console.log(order);
  const handleSort = (e) => {
    setOrder(e.target.value);
    console.log(order);
  };

  useEffect(() => {
    const params = {
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category, order]);
  return (
    <div>
      <h3>Filter By</h3>
      <div>
        <input
          type="checkbox"
          value="lapgames"
          onChange={handleFilter}
          checked={category.includes("lapgames")}
        />
        <label>Gaming Laptops</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="PS5"
          onChange={handleFilter}
          checked={category.includes("PS5")}
        />
        <label>Ps5 Games</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Controller"
          onChange={handleFilter}
          checked={category.includes("Controller")}
        />
        <label>Controller</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="pcgames"
          onChange={handleFilter}
          checked={category.includes("pcgames")}
        />
        <label>Gaming PCs</label>
      </div>
      <h3>Sort By Order</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          name="sort_by"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <input
          type="radio"
          name="sort_by"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
      </div>
    </div>
  );
};

export default SortBar;
