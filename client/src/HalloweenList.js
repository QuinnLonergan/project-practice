import React, {useEffect, useState} from "react";
import HalloweenCard from "./HalloweenCard";

function HalloweenList({itemsToRender}) {

  return (
    <>
    {itemsToRender.map((halloween) => (
      <HalloweenCard 
        key={halloween.id}
        person={halloween.person}
        name={halloween.name}
        image={halloween.img_url}
      />
    ))}
    </>
  );
}

export default HalloweenList;