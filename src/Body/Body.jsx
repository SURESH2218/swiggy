import React, { useEffect, useState } from "react";
import "./body.css";
import obj from "../utils/mockdata";
import RestCard from "../Restaurant/RestCard";
import { Shimmer } from "../Shimmer";

const Body = () => {
  const arr = useState(obj);
  const [filteredData, setFilteredData] = arr;
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    fetchData();
    console.log("useeffect called");
  }, [filteredData]);

  console.log("body rendered");

  const fetchData = async () => {
    setisLoading(true);

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5089914&lng=80.6479524&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    setisLoading(false);

    console.log(response);
    // setFilteredData(response.data.cards)
  };

  const handleButton = () => {
    // Filter the data based on the condition
    const filteredResult = obj.filter(
      (res) => res.accessibility.altTextCta === "closed"
    );
    setFilteredData(filteredResult);
  };

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <button className="filterButton" onClick={handleButton}>
          top rated restaurants
        </button>
      </div>
      <div className="resContainer">
        {filteredData.map((restaurant) => (
          <RestCard key={restaurant.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
