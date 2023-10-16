import React, { useState } from "react";
import { useEffect } from "react";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  //   console.log(resInfo);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5089914&lng=80.6479524&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setresInfo(json.data);
    console.log(
      resInfo.cards[0].card.card.imageGridCards.info[0].frequencyCapping.id
    );
  };
  return (
    <div>
      <h1>{resInfo}</h1>
    </div>
  );
};

export default RestaurantMenu;
