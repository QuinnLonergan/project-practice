import React, {useEffect, useState} from "react";
import HalloweenCard from "./HalloweenCard";

function HalloweenList({itemsToRender}) {

  return (
    <ul className="cards">{itemsToRender.map((halloween) => (
      <HalloweenCard 
        key={halloween.id}
        person={halloween.person}
        name={halloween.name}
        image={halloween.img_url}
      />
    ))}</ul>
  );
}

export default HalloweenList;