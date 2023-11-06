import { useNavigate } from "react-router-dom";
import { warehouseData } from "../assets/warehouse";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export const Home = () => {
  const [cityFilter, setCityFilter] = useState("");
  const [clusterFilter, setClusterFilter] = useState("");
  const [spaceLimitFilter, setSpaceLimitFilter] = useState("");

  const navigate = useNavigate();

  const filteredData = useSelector((state) => {
    const { warehouseData } = state.warehouse;
  
    return warehouseData.filter((item) => {
      const cityMatches = item.city.toLowerCase().includes(cityFilter.toLowerCase());
      const clusterMatches = item.cluster.toLowerCase().includes(clusterFilter.toLowerCase());
      const spaceLimitMatches =
        item.space_available >= parseInt(spaceLimitFilter, 10) || spaceLimitFilter === '';
  
      return cityMatches && clusterMatches && spaceLimitMatches;
    });
  });

  return (
    <div className="home">
      <div className="header">
        <h1 className="heading">Warehouse Finder</h1>
      </div>
      <div className="filters">
        <input
          type="text"
          placeholder="City"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cluster"
          value={clusterFilter}
          onChange={(e) => setClusterFilter(e.target.value)}
        />
        <input
          type="number"
          placeholder="Space Limit"
          value={spaceLimitFilter}
          onChange={(e) => setSpaceLimitFilter(e.target.value)}
        />
      </div>
      <div className="wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Code</th>
              <th>Name</th>
              <th>Type</th>
              <th>City</th>
              <th>Cluster</th>
              <th>Storage</th>
              <th>Registration</th>
              <th>Operational</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} onClick={() => navigate(`/${item.id}/update`, { data: item })}>
                <td>{item.id}</td>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.city}</td>
                <td>{item.cluster}</td>
                <td>{item.space_available}</td>
                <td>{item.is_registered ? "Yes" : "No"}</td>
                <td>{item.is_live ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
