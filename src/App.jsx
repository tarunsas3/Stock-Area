import React, { useEffect } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details } from "./components/Details";
import { useDispatch, useSelector } from "react-redux";
import { warehouseData } from "./assets/warehouse";

function App() {
  const dispatch = useDispatch();
  const warehouseDataFromStore = useSelector((state) => state.warehouse.warehouseData);

  useEffect(() => {
    if (warehouseDataFromStore.length === 0) {
      dispatch({ type: 'UPDATE_WAREHOUSE_DATA', payload: warehouseData });
    }
  }, [dispatch, warehouseDataFromStore]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/update" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
