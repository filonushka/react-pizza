import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router-dom";
import { setPizzas, setLoaded } from "./redux/actions/pizzas";

function App() {
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const dispatch = useDispatch(sortBy, category);
  console.log(sortBy, category);

  React.useEffect(() => {
    dispatch(setLoaded(false));
    axios
      .get(
        `/pizzas?$(category=${
          category !== null ? `category=${category}` : ""
        }&_sort=${sortBy.type}&_order=desc=${sortBy.order}`
      )
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  }, [category, sortBy]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
