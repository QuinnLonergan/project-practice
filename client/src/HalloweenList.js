import React from "react";
import HalloweenCard from "./HalloweenCard";

function HalloweenList({itemsToRender, handleDelete}) {


  return (
    <>
    {itemsToRender.map((halloween) => (
      <HalloweenCard 
        key={halloween.id}
        person={halloween.person}
        name={halloween.name}
        image={halloween.img_url}
        vote={halloween.vote}
        id={halloween.id}
        handleDelete={handleDelete}
      />
    ))}
    </>
  );
}

export default HalloweenList;