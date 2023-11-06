import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { warehouseData } from "../assets/warehouse";
import { useDispatch } from "react-redux";

export const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedData = warehouseData.find((item) => item.id === parseInt(id));

  const [updateData, setUpdateData] = useState({
    name: selectedData.name,
    city: selectedData.city,
    cluster: selectedData.cluster,
    space_available: selectedData.space_available.toString(),
    is_live: selectedData.is_live.toString(),
  });

  // Update the state when any input field changes
  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  const handleUpdateClick = () => {
    const updatedData = {
      ...selectedData,
      name: updateData.name,
      city: updateData.city,
      cluster: updateData.cluster,
      space_available: parseInt(updateData.space_available),
      is_live: updateData.is_live === 'true',
    };
  
    const updatedWarehouseData = warehouseData.map((item) =>
      item.id === updatedData.id ? updatedData : item
    );
  
    dispatch({ type: 'UPDATE_WAREHOUSE_DATA', payload: updatedWarehouseData });
    navigate('/');
  };

  return (
    <div className="formContainer">
      <div className="formDisplay">
        <h3>Update Details</h3>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={updateData.name}
            onChange={handleUpdateChange}
          />
          <label>City</label>
          <input
            type="text"
            name="city"
            value={updateData.city}
            onChange={handleUpdateChange}
          />
          <label>Cluster</label>
          <input
            type="text"
            name="cluster"
            value={updateData.cluster}
            onChange={handleUpdateChange}
          />
          <label>Storage</label>
          <input
            type="text"
            name="space_available"
            value={updateData.space_available}
            onChange={handleUpdateChange}
          />
          <label>Operational</label>
          <input
            type="text"
            name="is_live"
            value={updateData.is_live}
            onChange={handleUpdateChange}
          />
          <button type="button" onClick={handleUpdateClick}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};
